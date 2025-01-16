import React, { useEffect } from 'react'

export default function Timer({dispatch, secondsRemaining}) {

    useEffect(function () {
        const id =setInterval(function () {
            dispatch({type: "tick"})
        }, 1000)

        return function cleanup() {
            clearInterval(id)
        }

    }, [dispatch]);

    const min = Math.floor(secondsRemaining / 60);
    const sec = secondsRemaining % 60;
    const formatted = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`

  return (
    <div className='timer'>
        {formatted}
    </div>
  )
}
