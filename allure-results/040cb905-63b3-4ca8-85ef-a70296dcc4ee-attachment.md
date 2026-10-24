# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> Client App Login
- Location: tests\ClientAppPO.spec.js:6:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[routerlink*=cart]')
    - locator resolved to <button tabindex="0" _ngcontent-bwe-c33="" class="btn btn-custom" routerlink="/dashboard/cart">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 100ms
    48 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - element is outside of the viewport
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - generic [ref=e11] [cursor=pointer]: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e13] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e14]:
      - listitem [ref=e15] [cursor=pointer]:
        - button " HOME" [ref=e16]:
          - generic [ref=e17]: 
          - text: HOME
      - listitem
      - listitem [ref=e18] [cursor=pointer]:
        - button " ORDERS" [ref=e19]:
          - generic [ref=e20]: 
          - text: ORDERS
      - listitem [ref=e21] [cursor=pointer]:
        - button " Cart 1" [ref=e22]:
          - generic [ref=e23]: 
          - text: Cart
          - generic [ref=e24]: "1"
      - listitem [ref=e25] [cursor=pointer]:
        - button "Sign Out" [ref=e26]:
          - generic [aria-hidden] [ref=e27]: 
          - text: Sign Out
  - button "Filters " [expanded] [ref=e29] [cursor=pointer]:
    - text: Filters
    - generic [ref=e30]: 
  - generic [ref=e31]:
    - paragraph [ref=e32]: Home | Search
    - heading "Filters" [level=4] [ref=e34]
    - generic [ref=e35]:
      - textbox "search" [ref=e37]
      - generic [ref=e38]:
        - heading "Price Range" [level=6] [ref=e39]
        - generic [ref=e40]:
          - textbox "Min Price" [ref=e42]
          - textbox "Max Price" [ref=e44]
      - generic [ref=e45]:
        - heading "Categories" [level=6] [ref=e46]
        - generic [ref=e47]: 
        - generic [ref=e49]:
          - checkbox [ref=e50]
          - generic [ref=e51]: fashion
        - generic [ref=e52]:
          - checkbox [ref=e53]
          - generic [ref=e54]: electronics
        - generic [ref=e55]:
          - checkbox [ref=e56]
          - generic [ref=e57]: household
      - generic [ref=e58]:
        - heading "Sub Categories" [level=6] [ref=e59]
        - generic [ref=e60]: 
        - generic [ref=e62]:
          - checkbox [ref=e63]
          - generic [ref=e64]: t-shirts
        - generic [ref=e65]:
          - checkbox [ref=e66]
          - generic [ref=e67]: shirts
        - generic [ref=e68]:
          - checkbox [ref=e69]
          - generic [ref=e70]: shoes
        - generic [ref=e71]:
          - checkbox [ref=e72]
          - generic [ref=e73]: mobiles
        - generic [ref=e74]:
          - checkbox [ref=e75]
          - generic [ref=e76]: laptops
      - generic [ref=e77]:
        - heading "Search For" [level=6] [ref=e78]
        - generic [ref=e79]: 
        - generic [ref=e81]:
          - checkbox [ref=e82]
          - generic [ref=e83]: men
        - generic [ref=e84]:
          - checkbox [ref=e85]
          - generic [ref=e86]: women
  - text:   
  - generic [ref=e87]:
    - generic [ref=e88]:
      - generic [ref=e89]:
        - generic [ref=e90]: Showing 3 results |
        - generic [ref=e91]: User can only see maximum 9 products on a page
      - generic [ref=e92]:
        - generic [ref=e96]:
          - heading "ADIDAS ORIGINAL" [level=5] [ref=e97]
          - generic [ref=e98]: $ 11500
          - button "View" [ref=e100] [cursor=pointer]:
            - generic [aria-hidden] [ref=e101]: 
            - text: View
          - button " Add To Cart" [ref=e102] [cursor=pointer]:
            - generic [ref=e103]: 
            - text: Add To Cart
        - generic [ref=e107]:
          - heading "ZARA COAT 3" [level=5] [ref=e108]
          - generic [ref=e109]: $ 11500
          - button "View" [ref=e111] [cursor=pointer]:
            - generic [aria-hidden] [ref=e112]: 
            - text: View
          - button " Add To Cart" [active] [ref=e113] [cursor=pointer]:
            - generic [ref=e114]: 
            - text: Add To Cart
        - generic [ref=e118]:
          - heading "iphone 13 pro" [level=5] [ref=e119]
          - generic [ref=e120]: $ 55000
          - button "View" [ref=e122] [cursor=pointer]:
            - generic [aria-hidden] [ref=e123]: 
            - text: View
          - button " Add To Cart" [ref=e124] [cursor=pointer]:
            - generic [ref=e125]: 
            - text: Add To Cart
    - list "Pagination" [ref=e130]:
      - listitem [ref=e131]:
        - text: «
        - generic [ref=e132]:
          - text: Previous
          - generic [ref=e133]: page
      - listitem [ref=e134]:
        - generic [ref=e135]: You're on page
        - text: "1"
      - listitem [ref=e136]:
        - generic [ref=e137]:
          - text: Next
          - generic [ref=e138]: page
        - text: »
  - generic [ref=e139]: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  1  | class DashboardPage{
  2  | 
  3  |     constructor(page){
  4  |         this.page = page;
  5  |         this.products = page.locator('.card-body');
  6  |         this.productsText = page.locator('.card-body b');
  7  |         this.cart = page.locator('[routerlink*=cart]');
  8  |     }
  9  | 
  10 |     async searchProduct(productName){
  11 | 
  12 | 
  13 |      await this.productsText.first().waitFor();
  14 |      const count = await this.products.count();
  15 | 
  16 |     //Adding Product in Cart
  17 |     for(let i=0;i<count;i++){
  18 | 
  19 |         if(await this.products.nth(i).locator('b').textContent() === productName){
  20 | 
  21 |             await this.products.nth(i).locator('text= Add To Cart').click()
  22 |             break
  23 |         }
  24 |     }
  25 |     }
  26 |     async goToCart(){
> 27 |         await this.cart.click();
     |                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  28 |     }
  29 | }
  30 | 
  31 | module.exports = {DashboardPage}
```