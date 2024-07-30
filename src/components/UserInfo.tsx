import axios from "axios";
import { UserState } from "./userSlice.tsx";

// {"user":"111"
// "email":"een0203@gmail.com"}

async function getUserInfo() {
  try {
    // const response = await axios.get("https://2885-42-73-188-144.ngrok-free.app/plants/info/data");
    const response = await axios.get("host:port/admin/user/oauth2-login");
    if (response.status === 200) {
      const { user, email }: UserState = response.data;
      return { user, email };
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      console.log(error.response.data.message);
    } else if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.error(error);
      return null;
    }
  }
}

export default getUserInfo;
