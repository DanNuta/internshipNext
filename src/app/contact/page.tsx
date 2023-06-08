import { addDataOnServer } from "@/api";
import { FormClient } from "@/components";
import { FormProps } from "@/types";

const ContactPage = () => {
  async function onSubmit(data: FormProps) {
    "use server";
    try {
      const response = await addDataOnServer("/contact", data);

      if (response) {
        return response;
      } else {
        return Promise.reject(response);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }

  return <FormClient onSendData={onSubmit} />;
};

export default ContactPage;
