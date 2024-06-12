export const responseSuccess = {
  id: "5e320dad-f498-4e6a-9e0c-7267acc7be32",
  title: "Luxury Villa Ubud with Private Pool",
  description:
    "The spacious living area features floor-to-ceiling windows that flood the space with natural light, while the kitchen is equipped with stainless steel appliances and granite countertops. The master bedroom offers a peaceful oasis with a spa-like master bath and walk-in closet.",
  price: 4000000000,
  status: "active",
  tag: "best",
  availability: "available",
  propertyType: "house",
  landSize: 400,
  landSizeMeasurement: "sqm",
  buildingSize: 300,
  buildingSizeMeasurement: "sqm",
  bedRoomsAmount: 3,
  bathRoomsAmount: 4,
  carParkAmount: 2,
  garageAmount: 1,
  floorAmount: 2,
  buildingOrientation: "north",
  electricity: 6000,
  furnished: true,
  address: {
    id: "a85d539c-b080-4a93-8970-4eb321ec0bg6",
    subdistrict: "Ubud",
    regency: "Gianyar",
    province: "Bali",
    detail: "Jl Dr Soetomo - Near Warung Pak Bonawi",
    locationMaps: "https://maps.app.goo.gl/KaCxhrAbjDgFVvzY8",
  },
  facilities: [
    {
      id: "a85d539c-b080-4a93-8970-4eb321ec1234",
      name: "Security 24 hours",
    },
  ],
  images: [
    {
      id: "a85d539c-b080-4a93-8970-4eb481ec0bf1",
      type: "normal",
      url: "https://images.inc.com/uploaded_files/image/1920x1080/getty_164107628_970647970450057_56760.jpg",
    },
    {
      id: "8312a39a-b505-44b0-94be-97f00205dc15",
      type: "thumbnail",
      url: "https://scontent.fsub9-1.fna.fbcdn.net/v/t31.18172-8/1517869_613631962110119_3582296402256674260_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3qehpuhHLI8Q7kNvgHEpLVZ&_nc_ht=scontent.fsub9-1.fna&oh=00_AYAjS37vjx2fIGQ2FWXSHCn38AmS5xbxltzDA8RO4scXTw&oe=66740AA8",
    },
  ],
};

export const responseNotFound = {
  status: false,
  statusCode: 404,
  path: "/token/detail/0x00000000000000000000",
  message: "Token not found",
  result: {},
};

export const responseInternalServerError = {
  status: false,
  statusCode: 500,
  path: "auth/login",
  message: "Internal Server Error LULULU",
};
