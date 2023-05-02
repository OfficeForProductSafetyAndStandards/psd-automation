export type Product = {
  name: string
  category: string
  webpage: string
  subcategory: string
  description: string
  country_of_origin: string
  barcode: string
  brand: string
  model: string
}

export type Address = {
  addressLineOne: string;
  addressLineTwo: string;
  city: string;
  postcode: string;
  country: string;
}

export type Contact = {
  name: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
}

export type Business = {
  legalName: string;
  tradingName: string;
  companyNumber: string;
  address: Address;
  contact: Contact;
}
