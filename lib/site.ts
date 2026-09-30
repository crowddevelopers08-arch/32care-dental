const address = "Zen Square, Office No. 311, 3rd Floor, Panchshil Towers Road, Opposite EON Free Zone / Marvel Enigma, Kharadi, Pune – 411014";

export const site = {
  name: "32Care Dental Clinic",
  phones: [{ href: "tel:+919975611589", label: "+91 9975611589" }],
  address,
  hours: [
    { day: "Mon – Sat", time: "10:00 AM – 7:00 PM" },
    { day: "Sunday", time: "By Appointment Only" },
  ],
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13376.657616850724!2d73.956941!3d18.551433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e822bb13d7%3A0x114534f0c1dcb152!2s32Care%20Dental%20Clinic%20In%20Kharadi%20%7C%20Dentist%20in%20Kharadi%2C%20Pune%20%7C%20Dental%20Implants%20%7C%20Braces!5e1!3m2!1sen!2sin!4v1785937628463!5m2!1sen!2sin",
  mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("32Care Dental Clinic & Implant Center, " + address)}`,
};
