import Razorpay from "razorpay";
import { RZP_ID, RZP_KEY } from "./serverConfig";

export let instance = new Razorpay({
  key_id: RZP_ID as string,
  key_secret: RZP_KEY as string,
});
