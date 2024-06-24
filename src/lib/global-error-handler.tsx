import { Check, Error } from "@/assets/icons";
import { TSFixMe } from "./type";

export const handleResponse = async (
    response?: TSFixMe,
    message?: string,
    toast?: TSFixMe,
) => {
    console.log("The response is", response, message, toast)
    if (response.success) {
        toast({
            variant: "success",
            title: "Success",
            description: message,
            icon: <Check color="#46d700" size={22} />
        });

    } else {
        toast({
            variant: "destructive",
            title: "Error",
            description: message,
            icon: <Error color="red" size={22} />
        });
    }
};
