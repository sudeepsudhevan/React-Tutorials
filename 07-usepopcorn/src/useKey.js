import { useEffect } from "react";

export function useKey(key, action) {
    useEffect(
        function () {
          function callback(e) {
            if (e.key.toLowerCase() === key.toLowerCase()) {
              action();
            }
          }
    
          document.addEventListener("keydown", callback);
    
          return function cleanup() {
            document.removeEventListener("keydown", callback);
          };
        },
        [action, key]
      );
}