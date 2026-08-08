export type Office = {
  city: string;
  type: string;
  address: string[];
  phone?: string;
  phoneLabel?: string;
  mapsUrl: string;
  embedUrl: string;
};

export const offices: Office[] = [
  {
    city: "Bhubaneswar",
    type: "Registered Office",
    address: [
      "Plot No. 321, 2nd Floor",
      "Grand Lumbini Convention",
      "Neeladri Vihar, Chandrasekharpur",
      "Bhubaneswar, Odisha – 751021",
    ],
    phone: "+91 9938037974",
    phoneLabel: "HR",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Grand+Lumbini+Convention+Neeladri+Vihar+Chandrasekharpur+Bhubaneswar+751021",
    embedUrl:
      "https://www.google.com/maps?q=Grand%20Lumbini%20Convention%2C%20Neeladri%20Vihar%2C%20Chandrasekharpur%2C%20Bhubaneswar%2C%20Odisha%20751021&output=embed",
  },
  {
    city: "Hyderabad",
    type: "Engineering & Business Office",
    address: [
      "Dwaraka One, Plot No. 6 & 7, 1st Floor",
      "Near Raheja Mindspace",
      "Vittal Rao Nagar, Madhapur",
      "Hyderabad, Telangana – 500081",
    ],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Dwaraka+One+Vittal+Rao+Nagar+Madhapur+Hyderabad+500081",
    embedUrl:
      "https://www.google.com/maps?q=Dwaraka%20One%2C%20Vittal%20Rao%20Nagar%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081&output=embed",
  },
];

export const contactEmail = "info@polosoftadvanced.com";
export const contactPhone = "+91 9938037974";
