import { 
  users, type User, type InsertUser, 
  products, type Product, type InsertProduct,
  collections, type Collection, type InsertCollection
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  getAllCollections(): Promise<Collection[]>;
  getCollectionById(id: number): Promise<Collection | undefined>;
  getCollectionsByCategory(category: string): Promise<Collection[]>;
  createCollection(collection: InsertCollection): Promise<Collection>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private collections: Map<number, Collection>;
  private currentUserId: number;
  private currentProductId: number;
  private currentCollectionId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.collections = new Map();
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentCollectionId = 1;
    
    // Initialize with sample data
    this.initializeProducts();
    this.initializeCollections();
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }
  
  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }
  
  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }
  
  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
  
  async getAllCollections(): Promise<Collection[]> {
    return Array.from(this.collections.values());
  }
  
  async getCollectionById(id: number): Promise<Collection | undefined> {
    return this.collections.get(id);
  }
  
  async getCollectionsByCategory(category: string): Promise<Collection[]> {
    return Array.from(this.collections.values()).filter(
      (collection) => collection.category === category
    );
  }
  
  async createCollection(insertCollection: InsertCollection): Promise<Collection> {
    const id = this.currentCollectionId++;
    const collection: Collection = { ...insertCollection, id };
    this.collections.set(id, collection);
    return collection;
  }
  
  private initializeProducts() {
    const productsData: InsertProduct[] = [
      {
        name: "Structural Asymmetric Top",
        description: "Unique asymmetric design for modern styling",
        price: 129.00,
        category: "tops",
        imageUrl: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8",
        colors: ["black", "white", "red"],
        isNew: true,
        isSale: false,
        isLimited: false,
      },
      {
        name: "Pleated Wide-Leg Trousers",
        description: "Comfortable wide-leg design with modern pleating",
        price: 185.00,
        category: "bottoms",
        imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
        colors: ["black", "navy"],
        isNew: false,
        isSale: false,
        isLimited: false,
      },
      {
        name: "Deconstructed Oversized Blazer",
        description: "Statement blazer with contemporary deconstructed design",
        price: 220.00,
        salePrice: 300.00,
        category: "tops",
        imageUrl: "https://images.unsplash.com/photo-1507274301514-0532a3799e18",
        colors: ["black"],
        isNew: false,
        isSale: true,
        isLimited: false,
      },
      {
        name: "Avant-Garde Leather Tote",
        description: "Premium leather tote with architectural design elements",
        price: 350.00,
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1588444837495-c6b5f8897908",
        colors: ["brown", "black"],
        isNew: false,
        isSale: false,
        isLimited: true,
        tag: "LIMITED",
      },
      {
        name: "Minimalist Canvas Shirt",
        description: "Clean-lined shirt in premium cotton canvas",
        price: 145.00,
        category: "tops",
        imageUrl: "https://images.unsplash.com/photo-1578932750294-f5075e85f702",
        colors: ["white", "beige", "black"],
        isNew: true,
        isSale: false,
        isLimited: false,
      },
      {
        name: "Architectural Denim Jacket",
        description: "Reimagined denim with sculptural elements",
        price: 275.00,
        salePrice: 350.00,
        category: "tops",
        imageUrl: "https://images.unsplash.com/photo-1548126032-079a0fb0099d",
        colors: ["blue", "black"],
        isNew: false,
        isSale: true,
        isLimited: false,
      },
      {
        name: "Avant Midi Skirt",
        description: "Contemporary midi skirt with asymmetric hem",
        price: 165.00,
        category: "bottoms",
        imageUrl: "https://images.unsplash.com/photo-1551163943-3f7953a544e6",
        colors: ["black", "beige"],
        isNew: false,
        isSale: false,
        isLimited: false,
      },
      {
        name: "Statement Collar Necklace",
        description: "Bold architectural jewelry piece",
        price: 120.00,
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
        colors: ["silver", "gold"],
        isNew: true,
        isSale: false,
        isLimited: false,
      }
    ];
    
    productsData.forEach(product => {
      this.createProduct(product);
    });
  }
  
  private initializeCollections() {
    const collectionsData: InsertCollection[] = [
      {
        name: "Urban Summer",
        description: "Lightweight pieces for the modern city explorer.",
        category: "summer",
        imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
      },
      {
        name: "Winter Luxe",
        description: "Sophisticated layers designed for colder days.",
        category: "winter",
        imageUrl: "https://images.unsplash.com/photo-1551232864-3f0890e580d9"
      },
      {
        name: "Avant-Garde Limited",
        description: "Experimental designs in limited quantities.",
        category: "limited",
        imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae"
      }
    ];
    
    collectionsData.forEach(collection => {
      this.createCollection(collection);
    });
  }
}

export const storage = new MemStorage();
