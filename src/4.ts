class Key {
  private signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * 1000000);
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  protected door: boolean = false;
  protected key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      console.log(`Welcome, ${person.getKey().getSignature()}!`);
      // Тут можна додати особу до списку мешканців
    } else {
      console.log("The door is closed.");
    }
  }
}
class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door opened.");
    } else {
      console.log("Invalid key.");
    }
  }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
export {};
