// สร้างข้อความทักทายพร้อมชื่อที่รับเข้ามา
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// แสดงผลการทักทายไปยัง console
console.log(greet("World"));
