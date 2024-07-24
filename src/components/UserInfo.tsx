import axios from "axios";
import { UserState } from "./userSlice.tsx";

// {"user":"111"
  // "email":"een0203@gmail.com"}


async function getUserInfo() {
    try {
      // const response = await axios.get("https://2885-42-73-188-144.ngrok-free.app/plants/info/data");
      const response = await axios.get("host:port/admin/user/oauth2-login");
      const { user, email } : UserState = response.data;
      return { user, email };
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  export default getUserInfo;