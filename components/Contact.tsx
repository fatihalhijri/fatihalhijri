import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast, Toaster } from "react-hot-toast";

interface FormData {
  nama: string;
  email: string;
  keterangan: string;
  pesan: string;
}

const Contact = () => {
  const [state, handleSubmit] = useForm("mdkoowaz");
  
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    email: "",
    keterangan: "",
    pesan: "",
  });
  
  // Fungsi untuk menampilkan notifikasi saat berhasil
  const showSuccessNotification = () => {
    toast.success("Pesan Anda Terkirim!");
  };
  
  // Fungsi validasi nama harus lebih dari 3 karakter
  const isFormValid = (): boolean => {
    if (formData.nama.length < 3) {
      toast.error("Nama harus lebih dari 3 karakter!");
      return false;
    }
    return true;
  };
  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Mencegah halaman ter-refresh
  
    if (!isFormValid()) return;
  
    await handleSubmit(event);
  
    if (state.succeeded) {
      showSuccessNotification();
      setFormData({
        nama: "",
        email: "",
        keterangan: "",
        pesan: "",
      });
    }
  };
  useEffect(() => {
    if (state.succeeded) {
      showSuccessNotification(); // Menampilkan notifikasi jika pengiriman berhasil
      // Reset form setelah berhasil submit
      setFormData({
        nama: "",
        email: "",
        keterangan: "",
        pesan: "",
      });
    }
  }, [state.succeeded]); // Menjalankan setiap kali state.succeeded berubah
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // // Fungsi untuk menampilkan toast saat form berhasil dikirim
  // const notifySuccess = () => {
  //   toast.success("Thanks for contacting us!", {
  //     style: {
  //       width: "90%",
  //       background: "#fff",
  //       color: "#000",
  //       padding: "1rem",
  //       borderRadius: "10px",
  //       boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  //     },
  //     duration: 4000,
  //   });
  // };

  // // Ketika form berhasil dikirim, tampilkan toast
  // const onSubmit = async (event: any) => {
  //   event.preventDefault();
  //   await handleSubmit(event);
  //   if (state.succeeded) {
  //     notifySuccess();
  //     event.target.reset();
  //   }
  // };

  return (
    <div className="pt-[5rem] pb-[3rem] bg-white dark:bg-dark">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div>
          <p className="heading__mini" id="contact">
            Mari Terhubung
          </p>
          <h1 className="heading__primary">
            Hubungi <span className="text-primary">Saya</span>{" "}
          </h1>
          <p className="text-[15px] opacity-75 text-black dark:text-white mt-[1rem]">
            Dengan pengalaman dan dedikasi, saya siap membantu Anda mencapai
            visi yang Anda impikan.
          </p>
          <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-primary underline font-bold">
            +62 851-7962-0695
          </h1>
        </div>

        <div>
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center ">
              <input
                type="text"
                placeholder="Nama"
                value={formData.nama}
                name="nama"
                className="py-[0.7rem] outline-none text-black dark:text-white placeholder:dark:text-white  bg-black/10 dark:bg-darkTua rounded-md px-4"
                required
                onChange={handleInputChange}
              />

              <input
                value={formData.email}
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className="py-[0.7rem] outline-none text-black dark:text-white placeholder:dark:text-white  bg-black/10 dark:bg-darkTua rounded-md px-4"
                required
                onChange={handleInputChange}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <input
              value={formData.keterangan}
              type="text"
              placeholder="Keterangan"
              name="keterangan"
              className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-black dark:text-white placeholder:dark:text-white  bg-black/10 dark:bg-darkTua rounded-md px-4"
              required
              onChange={handleInputChange}
            />

            <textarea
              value={formData.pesan}
              placeholder="Pesan"
              name="pesan"
              id="pesan"
              rows={4}
              className="py-[0.7rem] w-full outline-none text-black dark:text-white placeholder:dark:text-white  bg-black/10 dark:bg-darkTua px-4 rounded-md"
              required
              onChange={handleInputChange}
            ></textarea>
            <ValidationError
              prefix="pesan"
              field="pesan"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full text-white bg-primary hover:bg-teal-400 rounded-md px-4 font-semibold"
            >
              {state.submitting ? "Mengirim..." : "Kirim"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
