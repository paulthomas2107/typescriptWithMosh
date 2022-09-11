console.log("Hello Paul !");

let age: number = 21;

if (age > 15) {
  age += 20;
  console.log(age);
}

let sales: number = 123456789;
let more_sales: number = 123_456_789;
console.log(sales == more_sales); // sales and more sales are same _ seperate digits optional

let course: string = "Typescript source";
let is_published: boolean = true;
let is_ok = true;
let sales_ok = 12222;
let im_a_atring = "ooosos";
let bull: any = 2222; // any kind of value
bull = "ddd"; // not great but works....best NOT TO USE ANY

// Arrays
let numbers = [1, "A'", 3]; // lets anything in if leave off number etc
console.log(numbers);
let better_array: number[] = [1, 2, 3]; // always number

better_array.forEach((x) => {
  console.log(x);
});

// Tuples
// id and name example
let user: [number, string] = [1, "paul"];
console.log(user);

// Enum
const enum Size {
  Small = 1,
  Medium, // Compiler makes rest ints
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize); // Shows 2

// Functions
function calculateTax(income: number, taxYear: number): number {
  // always return something
  if (taxYear > 1990) {
    if (income < 50_000) {
      return income * 1.2;
    } else {
      return income * 2.0;
    }
  } else {
    return 0;
  }
}

console.log(calculateTax(10_000, 1989));
console.log(calculateTax(70_000, 1992));

// Objects
let employee_obj: {
  readonly id: number;
  name: string; // ? is optional
  // Methods of object
  retire: (date: Date) => void;
};

// Best way to create object
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let paul: Employee = {
  id: 1,
  name: "Paul",
  retire: (date: Date) => date.toISOString,
};

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

console.log(kgToLbs(10));
console.log(kgToLbs("100  kg"));

// Intersection types
let weight: number & string;

type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal type]
type Quantity = 50 | 100; // Only 50 or 100
let quantity: Quantity = 50;
quantity = 100;

type Metric = "cm" | "Inch";
let lenType: Metric = "cm";

// Nullable types
function greet(name: string | null | undefined) {
  if (name) return name.toUpperCase();
  else if (name === null) {
    return "Null found";
  } else if (name === undefined) {
    return "Undefinded found";
  }
}

console.log(greet("p a u l "));
console.log(greet(null));
console.log(greet(undefined));

// Optional chaining
type Customer = {
  birthday?: Date; // optional with ?
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday); // Undefined
customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear()); // Actual date / year

// Optional elemment access operator
let log: any = (message: string) => console.log(message);
log?.('Hello')
log?.(null)

//  I'm a comment