const files = import.meta.glob<string>("../assets/p/*.webp", { eager: true, import: "default" });

export function img(slug: string): string {
  return files[`../assets/p/${slug}.webp`] ?? "";
}

export type Item = { name: string; slug: string; spec?: string };
export type Category = { id: string; title: string; note: string; items: Item[] };

const mk = (name: string, spec?: string): Item => ({
  name,
  slug: name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/-+$/, ""),
  ...(spec ? { spec } : {}),
});

export const categories: Category[] = [
  {
    id: "spices",
    title: "Spices",
    note: "Whole and ground Sri Lankan spices, supplied to buyer specification.",
    items: [
      mk("Cinnamon", "Quills, quillings, powder, oil"),
      mk("Black Pepper", "Whole & powdered"),
      mk("Cloves", "Whole & powdered"),
      mk("Mace", "Whole & powdered"),
      mk("Cardamom", "Pods & powdered"),
      mk("Garcinia", "Whole & powdered"),
      mk("Dried Chilli", "Whole"),
      mk("Nutmeg", "Whole & powdered"),
      mk("Vanilla", "Beans, powder, extract"),
      mk("Turmeric Powder", "Powdered"),
      mk("Ginger Powder", "Powdered"),
      mk("Curry Powder", "Powdered"),
      mk("Chilli Powder", "Powdered"),
    ],
  },
  {
    id: "fruits",
    title: "Fresh Fruits",
    note: "Tropical fruits, subject to seasonality and market requirements.",
    items: ["King Coconut", "Mango", "Plantain", "Pineapple", "Papaya", "Guava", "Watermelon", "Dragonfruit", "Passionfruit", "Avocado", "Soursop", "Woodapple", "Mangosteen", "Rambutan"].map((n) => mk(n)),
  },
  {
    id: "vegetables",
    title: "Vegetables",
    note: "Fresh vegetables and root crops, subject to seasonality.",
    items: ["Cabbage", "Carrot", "Beetroot", "Bell Pepper", "Cauliflower", "Capsicum", "Cucumber", "Potato", "Radish", "Ash Plantain", "Pumpkin", "Butternut Squash", "Pennywort", "Green Beans", "Ladies Fingers", "Leeks", "Oyster Mushrooms", "Sweet Potato", "Moringa", "Cassava", "Breadfruit", "Snake Gourd", "Bitter Gourd"].map((n) => mk(n)),
  },
  {
    id: "herbs",
    title: "Fresh Herbs",
    note: "Fresh herbs and aromatics for food importers and wholesalers.",
    items: ["Curry Leaves", "Coriander", "Mint", "Green Chilli", "Ginger", "Garlic", "Lemongrass"].map((n) => mk(n)),
  },
];

export const totalItems = categories.reduce((s, c) => s + c.items.length, 0);

export const contact = {
  email: "sterlinglankaimpex@gmail.com",
  phone: "+94 72 151 4444",
  whatsapp: "94721514444",
  address: "58, Sri Mahindha Dharma Mawatha, Dematagoda, Colombo 09, Sri Lanka",
  instagram: "https://www.instagram.com/sterlinglankaimpex",
  tiktok: "https://www.tiktok.com/@sterlinglankaimpex",
};
