const{test,expect} = require('@playwright/test');


test('DemoBlaze', async({page})=>
{
 // const productName="Nexus 6";
 // const products= page.locator(".card-title");
 // const description= page.locator("(//p[@id='article'])");
//  const price= page.locator("(//h5[contains(text(),'$')])");
  await page.goto("https://www.demoblaze.com/index.html");
 // await page.waitForLoadState('networkidle');
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("komako");
  await page.locator("#loginpassword").fill("lane");
  await page.locator("button[onclick='logIn()']").click();
 const Titles = await page.locator(".card-title a").allTextContents();
 console.log(Titles);
 const Price = await page.locator("(//h5[contains(text(),'$')])").allTextContents();
 console.log(Price);
 const Description = await page.locator("(//p[@id='article'])").allTextContents();
 console.log(Description);
 const Count= await page.locator(".card-title a").count();
 console.log(Count)
// const phones = await page.$$(".card-title a");
const products = await page.locator("//div[@class='card-block']").all();
console.log('product count',products.length)
for(let i=0; i<products.length; i++){
  console.log('Product Title',await products[i].locator("//h4").textContent())
  console.log('Product Price',await products[i].locator("//h5").textContent())
  console.log('product Description',await products[i].locator("//p").textContent())
}
});
test('Validate' ,   async({page})=>
{
  await page.goto("https://www.demoblaze.com/index.html");
 // await page.waitForLoadState('networkidle');
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("komako");
  await page.locator("#loginpassword").fill("lane");
  await page.locator("button[onclick='logIn()']").click();

  const jsonData = [
    { Title: "Samsung galaxy s6", price: "$360", description: "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor" },
    { Title: "Nokia lumia 1520", price: "$820", description: "The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800" },
    { Title: "Nexus 6", price: "$650", description: "The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805" },
    { Title: "Samsung galaxy s7", price: "$800", description: "The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM." },
    { Title: "Iphone 6 32gb", price: "$790", description: "It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As" }
  ]
  const appData = [
    { Title: "Samsung galaxy s6", price: "$360", description: "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor" },
    { Title: "Nokia lumia 1520", price: "$800", description: "The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800" },
    { Title: "Nexus 6", price: "$600", description: "The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805" },
    { Title: "Samsung galaxy s7", price: "$800", description: "The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM." },
    { Title: "Iphone 6 32gb", price: "$790", description: "It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As" }
  ]


  
  
  if (jsonData.length !== appData.length) {
    console.log("Data mismatch: The number of items is different.");
    return false;
  }

  for (let i = 0; i < jsonData.length; i++) {
    const jsonItem = jsonData[i];
   const appItem = appData[i];


   if (jsonItem.Title !== appItem.Title) {
    console.log(`Mismatch at index ${i}: "Title" differs. JSON = "${jsonItem.Title}", App = "${appItem.Title}"`);
    return false;
  }
  if (jsonItem.price !== appItem.price) {
    console.log(`Mismatch at index ${i}: "price" differs. JSON = ${jsonItem.price}, App = ${appItem.price}`);
    return false;
  }
  if (jsonItem.description !== appItem.description) {
    console.log(`Mismatch at index ${i}: "description" differs. JSON = "${jsonItem.description}", App = "${appItem.description}"`);
    return false;
  }
}

console.log("JSON data matches application data!");

 return true;

});
