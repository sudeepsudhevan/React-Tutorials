"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";


export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be signed in to update your profile");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Please provide a valid national ID");
  }

  const updateData = {
    nationalID,
    nationality,
    countryFlag,
  };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");

}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be signed in to delete a reservation");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You are not allowed to delete this reservation");
  }

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Reservation could not be deleted");

  revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {

  const bookingId = Number(formData.get("bookingId"));
  // 1) Authenticate the user
  const session = await auth();
  if (!session) throw new Error("You must be signed in to update a reservation");

  // 2) Authorization: Check if the user is allowed to update the reservation
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You are not allowed to update this reservation");
  }
  
  // 3) Build the update data
  const updateData = {
    numGuests : Number(formData.get("numGuests")),
    observations : formData.get("observations").slice(0, 1000),
  };

  // 4) Update the reservation: mutate the data
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId);

  // 5) Handle errors  
  if (error) throw new Error("Reservation could not be updated");

  // 6) Revalidate the page

  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");

  // 7) Redirecting the page
  redirect("/account/reservations");
}

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}
