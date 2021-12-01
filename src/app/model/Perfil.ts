export class Perfil {
  private id: Number;
  private email: String;
  private name: String;
  private gender: String;
  private age: Number;
  private city: String;
  private description: String;
  private music: String;
  private arrayLikes: string[];
  private arrayDislikes: string[];

  constructor(
    id: number,
    email: String,
    name: String,
    gender: String,
    age: Number,
    city: String,
    description: String,
    music: String,
    arrayLikes: string[],
    arrayDislikes: string[]
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.city = city;
    this.description = description;
    this.music = music;
    this.arrayLikes = arrayLikes;
    this.arrayDislikes = arrayDislikes;
  }

  public getId(): Number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getEmail(): String {
    return this.email;
  }

  public setEmail(email: String): void {
    this.email = email;
  }

  public getName(): String {
    return this.name;
  }

  public setName(name: String): void {
    this.name = name;
  }

  public getGender(): String {
    return this.gender;
  }

  public setGender(gender: String): void {
    this.gender = gender;
  }

  public getAge(): Number {
    return this.age;
  }

  public setAge(age: Number): void {
    this.age = age;
  }

  public getCity(): String {
    return this.city;
  }

  public setCity(city: String): void {
    this.city = city;
  }

  public getDescription(): String {
    return this.description;
  }

  public setDescription(description: String): void {
    this.description = description;
  }

  public getMusicGender(): String {
    return this.music;
  }

  public setMusicGender(musicGender: String): void {
    this.music = this.music;
  }

  public getArrayLikes(): string[] {
    return this.arrayLikes;
  }

  public setArrayLikes(arrayLikes: string[]): void {
    this.arrayLikes = arrayLikes;
  }

  public getArrayDislikes(): string[] {
    return this.arrayDislikes;
  }

  public setArrayDislikes(arrayDislikes: string[]): void {
    this.arrayDislikes = arrayDislikes;
  }
}
