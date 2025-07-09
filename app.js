
document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const productSection       = document.getElementById("productSection");
  const searchBar            = document.getElementById("searchBar");
  const categoryList         = document.getElementById("categoryList");
  const productModal         = document.getElementById("productModal");
  const closeButton          = document.querySelector(".close-button");

  const modalProductImage    = document.getElementById("modalProductImage");
  const modalProductName     = document.getElementById("modalProductName");
  const modalProductPrice    = document.getElementById("modalProductPrice");
  const modalProductCategory = document.getElementById("modalProductCategory");
  const modalProductDescription = document.getElementById("modalProductDescription");
  const modalProductPackSize = document.getElementById("modalProductPackSize");



  const products = [
    { name: "Tomato", price: "₹20/kg", image: "assets/tomato.jpg.jpeg", category: "Vegetables", description: "Our farm-fresh Organic Tomatoes are handpicked at peak ripeness to deliver unbeatable flavor and nutrition. Grown without the use of harmful pesticides or chemicals, these juicy red tomatoes are 100% natural, non-GMO, and responsibly cultivated using sustainable farming practice.", packSize: "1kg+" },
    { name: "Milk", price: "₹30/L", image: "assets/milk.jpg.jpeg", category: "Dairy Products", description: "Our Farm Fresh Cow Milk is sourced daily from healthy, grass-fed desi cows and delivered straight from the farm to your doorstep — 100% pure, natural, and unprocessed.Rich in taste, creamy in texture, and loaded with essential nutrients like calcium, protein, and Vitamin B12, this milk is perfect for growing children, active adults, and health-conscious families.", packSize: "1 Litre" },
    { name: "Banana", price: "₹50/dozen", image: "assets/banana.jpg.jpeg", category: "Fruits", description: "Naturally sweet, soft, and full of energy – our Organic Bananas are grown using chemical-free and eco-friendly methods, making them a perfect daily superfruit for all ages.These bananas are carefully harvested at just the right time to ensure perfect ripeness, taste, and texture. Packed with essential nutrients like potassium, fiber, and Vitamin B6, they support digestion, boost energy, and help maintain overall wellness.", packSize: "1 Dozen" },
    { name: "Walnut Brownie", price: "₹219.07 at ₹24.34/pc", image: "assets/Walnut Brownie.jpg.jpeg", category: "Bakery & Chocolates", description: "Indulge in the rich, chocolaty goodness of our Fudgy Walnut Brownies — made with premium dark cocoa, real butter, and crunchy handpicked walnuts. Each bite is soft, gooey, and loaded with bold chocolate flavor, balanced perfectly by the nutty crunch of roasted walnuts.Freshly baked in small batches with love and zero preservatives, these brownies are the ultimate treat for your sweet cravings.", packSize: "9 pcs" },
    { name: "Molten Lava Cake", price: "₹219.07 at ₹24.34/pc", image: "assets/Molten Lava Cake.jpg.jpeg", category: "Bakery & Chocolates", description: "Dive into the ultimate chocolate indulgence with our Molten Lava Cake – a soft, rich chocolate cake with a warm, gooey molten center that flows like pure magic with every bite.Baked fresh using premium dark chocolate, real butter, and zero preservatives, this dessert is a perfect balance of crisp edges and a liquid", packSize: "9 pcs" },
    { name: "Carrots", price: "₹53.9/kg for 3 kgs+", image: "assets/Carrots.jpg.jpeg", category: "Vegetables", description: "Crunchy, sweet, and naturally vibrant — our Organic Carrots are grown using chemical-free, sustainable farming practices to deliver unmatched freshness and nutrition.Handpicked at peak ripeness, these carrots are rich in Vitamin A, beta-carotene, antioxidants, and fiber, making them an essential part of a healthy diet for all ages.", packSize: "3kg+" },
    { name: "Green Capsicum", price: "₹62/kg for 3 kgs+", image: "assets/capsicum.jpeg", category: "Vegetables",description: "Vibrant green capsicums, sweet and crunchy, ideal for stir-fries.Bright, crisp, and full of natural flavor — our Organic Green Capsicums are hand-harvested and delivered fresh from the farm. Grown without harmful chemicals or pesticides, they’re a rich source of Vitamin C, antioxidants, and dietary fiber.", packSize: "3kg+" },
    { name: "Butter Croissant, Handrolled", price: "₹180 at ₹60/pc", image: "assets/croissant.jpeg", category: "Bakery & Chocolates", description: "Authentic hand-rolled butter croissants, flaky and delicious.Indulge in the flaky, buttery goodness of our Handrolled Butter Croissant, made with love using layers of real butter and expertly folded dough. Light, golden, and crisp on the outside with a soft, airy center, each croissant is freshly baked to perfection. Ideal for breakfast, coffee breaks, or gourmet sandwiches — this artisanal treat brings a touch of Paris straight to your plate.",packSize: "3 pcs" },
    { name: "Chicken Grilled Patty", price: "₹299.02 at ₹24.92/pc", image: "assets/patty.jpeg", category: "Frozen & Instant Food", description: "Juicy, tender, and packed with smoky flavor — our Frozen Grilled Chicken Patties are made from premium quality chicken, seasoned with chef-crafted spices, and flame-grilled to perfection.Quick to cook and incredibly versatile, these patties are perfect for burgers, wraps, sandwiches, or even a high-protein snack..", packSize: "12 pcs" },
    { name: "Momo Schezwan Chutney", price: "₹130", image: "assets/momo.jpeg", category: "Sauces & Seasonings", description: "Spice up your snack time with our Momo Schezwan Chutney—a fiery, flavorful dip made from real garlic, red chillies, and authentic Indo-Chinese spices. Thick, zesty, and perfectly balanced, it’s the ultimate companion for momos, fries, rolls, and noodles. Freshly made with no artificial preservatives or colors, this chutney brings that addictive street-style kick straight to your plate. One bite and you’ll be hooked!", packSize: "200 gm" },
    { name: "Chicken Fried Wings[Frozen]", price: "₹299", image: "assets/wings.jpeg", category: "Frozen & Instant Food", description: "Get crispy, juicy wings in minutes with our Ready-to-Fry Chicken Wings! Made from premium quality chicken, perfectly marinated with bold spices and herbs, these wings are frozen fresh and ready to sizzle straight from your freezer to the pan or fryer. No hassle, no mess—just fry, crunch, and enjoy restaurant-style wings at home anytime. Perfect for parties, snacks, or game day cravings!",packSize: "500 gm" },
    { name: "Amul - Butter Salted, 500 gm", price: "₹249", image: "assets/butter.jpeg", category: "Dairy Products", description: "Enjoy the rich, creamy taste of Amul Salty Butter, made from fresh, high-quality cream and perfectly salted for that classic buttery flavor. Smooth and spreadable, it’s ideal for your toast, cooking, baking, or adding that extra delicious touch to your meals. Trusted for generations, Amul Butter delivers freshness and quality you can count on every day.", packSize: "500 gm" },
    { name: "Amul - Fresh Cream, 1 L", price: "₹217/L", image: "assets/cream.jpeg", category: "Dairy Products", description: "Experience the rich, velvety goodness of Amul Fresh Cream, made from pure, fresh milk with no preservatives. Perfectly smooth and creamy, it adds a luscious texture and subtle sweetness to your desserts, soups, and savory dishes. Trusted for its freshness and quality, Amul Fresh Cream is your go-to choice for cooking and baking that extra special touch.", packSize: "1 Litre" },
    { name: "Amul - Processed Cheese Block, 1 Kg", price: "₹459/Kg", image: "assets/cheese.jpeg", category: "Dairy Products", stock: "Out of stock", description: "Enjoy the creamy, mild flavor of Amul Processed Cheese, made from high-quality milk and crafted for perfect melting and spreading. Ideal for sandwiches, burgers, and snacks, it melts smoothly and adds a rich, cheesy taste to your favorite recipes. Trusted for consistent quality and freshness, Amul Processed Cheese is the perfect choice for everyday deliciousness.",packSize: "1 kg" },
    { name: "Eggs (30 Pcs/ Tray)", price: "₹160", image: "assets/eggs.jpeg", category: "Chicken & Eggs", description: "Our farm-fresh Eggs come from healthy, free-range hens raised with care and no antibiotics. Packed with high-quality protein, essential vitamins, and minerals, these eggs are perfect for cooking, baking, or a nutritious breakfast. Freshly collected and carefully handled, they deliver natural goodness straight from the farm to your table.", packSize: "30 pcs/tray" },
    { name: "Chilled Chicken Breast Boneless, 2Kg Pack", price: "₹500", image: "assets/bre.jpeg", category: "Chicken & Eggs", description: "Our Chilled Boneless Chicken Breast is fresh, tender, and hormone-free, sourced from healthy chickens and carefully chilled to lock in natural juices and flavor. Perfect for grilling, roasting, or stir-frying, it’s a lean, high-protein choice for healthy meals. Ready to cook and packed with quality you can trust—straight from the farm to your kitchen.", packSize: "2 kg" },
    { name: "Frozen Chicken Wings Whole, 2 Kg", price: "₹350", image: "assets/whole.jpeg", category: "Chicken & Eggs",description: "Whole frozen chicken wings, great for appetizers.Our Frozen Whole Chicken Wings are carefully selected from premium quality chicken, flash-frozen to lock in freshness and flavor. Perfect for frying, grilling, or baking, these wings are juicy, tender, and ready to turn into your favorite spicy or smoky snacks anytime. Convenient, delicious, and packed with protein—straight from the farm to your freezer.",packSize: "2 kg" },
    { name: "Chilled Chicken Whole With Skin (900 - 1100 gm/pc), 5 Pc/Pack 5.50 kg", price: "₹980", image: "assets/ckn.jpeg", category: "Chicken & Eggs", description: "Fresh whole chicken with skin, perfect for roasting.ur Whole Chicken with Skin is sourced from healthy, farm-raised birds and delivered fresh with the skin intact to lock in natural juices and flavor. Perfect for roasting, grilling, or slow cooking, it offers tender meat with a crispy, golden skin that adds an irresistible taste to any meal. Packed with protein and freshness, it’s your all-in-one choice for wholesome home-cooked goodness.",packSize: "1 pcs pack (~5.5 kg)" },
    { name: "Kissan - Professional Sauce Dip, 930 gm 1 pc", price: "₹65", image: "assets/dip.png", category: "Sauces & Seasonings", description: "Tangy Kissan sauce dip, versatile for various dishes.Elevate your snacks with Kissan Professional Sauce Dip — a rich, flavorful dip crafted to perfection with a blend of bold spices and creamy texture. Ideal for fries, chips, sandwiches, and more, this dip delivers that perfect balance of zest and smoothness, making every bite irresistible. Made with quality ingredients and no artificial preservatives, it’s your go-to companion for snack time or party moments.", packSize: "930 gm" },
    { name: "Kissan - Tomato Puree, 800 gm 1 pack", price: "₹60", image: "assets/ket.png", category: "Sauces & Seasonings", description: "Concentrated Kissan tomato puree, adds rich flavor to curries.Enjoy the rich, tangy flavor of Kissan Tomato Ketchup, made from ripe, juicy tomatoes blended with just the right amount of spices and sweetness. Perfect as a dip, spread, or cooking ingredient, this ketchup adds a delicious burst of taste to your snacks and meals. Trusted for quality and freshness, Kissan Ketchup brings the authentic taste of real tomatoes to your table every time.",packSize: "800 gm" },
    { name: "Chef's Piri Piri Sprinkler, 250 gm", price: "₹120", image: "assets/peri.jpeg", category: "Sauces & Seasonings", description: "Spicy Piri Piri sprinkler, perfect for adding a kick to your food.Turn up the heat with our Spicy Piri Piri Sprinkler — a bold blend of fiery chili, zesty herbs, and aromatic spices that instantly amps up the flavor of your grilled meats, snacks, salads, and more. Perfect for sprinkling on wings, fries, veggies, or even popcorn, it delivers a mouthwatering kick with every pinch. Made from quality ingredients with no artificial additives, this spicy sprinkle is your secret weapon for unforgettable taste and fire!", packSize: "250 gm" },
    { name: "Kashmiri Lal Chilli Powder, 500 gm", price: "₹350", image: "assets/lal.jpeg", category: "Masala,Salt and Sugar", description: "Vibrant Kashmiri Lal Chilli powder, adds color and mild heat.Add a rich, deep red color and mild heat to your dishes with our Kashmiri Chilli Powder — made from premium quality Kashmiri red chillies known for their vibrant color and subtle spiciness. Perfect for curries, tikkas, and marinades, it enhances flavor without overpowering your palate. Pure, natural, and free from artificial colors or preservatives, this powder brings the authentic taste of Kashmir straight to your kitchen.", packSize: "500 gm" },
    { name: "Turmeric Powder, 500 gm", price: "₹300", image: "assets/yellow.jpeg", category: "Masala,Salt and Sugar", description: "Pure turmeric powder, known for its health benefits and flavor.Experience the natural goodness of our Pure Turmeric Powder, sourced from the finest turmeric roots and finely ground to deliver vibrant color and potent health benefits. Known for its anti-inflammatory and antioxidant properties, this versatile spice adds warmth and earthiness to your curries, soups, and teas. 100% natural, chemical-free, and perfect for daily use in your kitchen or wellness routine.", packSize: "500 gm" },
    { name: "Black Pepper Powder, 500 gm", price: "₹250", image: "assets/powder.jpeg", category: "Masala,Salt and Sugar", stock: "Out of Stock", description: "Finely ground black pepper powder, essential for seasoning.Unlock the rich, pungent flavor of Black Pepper, carefully sourced and freshly ground to add a warm, spicy kick to your dishes. Known as the “King of Spices,” this versatile seasoning enhances everything from soups and salads to marinades and grilled meats. Pure, natural, and free from additives, our black pepper brings authentic taste and aroma straight to your kitchen.", packSize: "500 gm" },
    { name: "Sea Salt, 500 gm", price: "₹200", image: "assets/salt.jpeg", category: "Masala,Salt and Sugar", description: "Natural sea salt, rich in minerals, perfect for everyday use.Enhance your dishes with the pure, natural flavor of Sea Salt, harvested from pristine ocean waters and minimally processed to retain its natural minerals and subtle crunch. Perfect for seasoning, cooking, or finishing your meals, this salt adds a clean, balanced taste that elevates every bite. Free from additives and chemicals, our sea salt is the natural choice for healthy, flavorful cooking.", packSize: "500 gm" },
    { name: "Rock Salt, 500 gm", price: "₹350", image: "assets/rock.jpeg", category: "Masala,Salt and Sugar", description: "Pure rock salt, known for its unique flavor and health properties.Discover the pure, mineral-rich taste of Rock Salt, naturally harvested from ancient salt deposits. Coarse and crunchy, this salt is perfect for seasoning, cooking, and even traditional health remedies. Free from additives and chemicals, rock salt adds a balanced flavor and essential minerals to your dishes, making it a wholesome choice for everyday use.", packSize: "500 gm" },
    { name: "Olive Oil, 500 ml", price: "₹450", image: "assets/oil.jpeg", category: "Edible Oil", description: "Extra virgin olive oil, healthy and versatile for cooking.Experience the richness of Pure Olive Oil, cold-pressed from the finest olives to retain maximum flavor and nutrients. Light, aromatic, and heart-healthy, it’s perfect for cooking, salad dressings, drizzling, and even skincare. Packed with antioxidants and healthy fats, our olive oil is 100% natural, chemical-free, and a must-have for a balanced, wholesome lifestyle.", packSize: "500 ml" },
    { name: "Green Apple Syrup, 750 ml", price: "₹290", image: "assets/syp.jpeg", category: "Beverages & Mixers", description: "Refreshing green apple flavored syrup, great for drinks.Refresh your senses with the crisp, tangy taste of our Green Apple Flavoured Syrup — a perfect blend of sweet and sour that adds a zesty twist to mocktails, sodas, desserts, slushies, and more. Made with high-quality ingredients and a burst of fruity flavor, this syrup delivers that signature green apple punch in every drop. Bright, bold, and irresistibly refreshing — it's your go-to for instant cool vibes!", packSize: "750 ml" },
    { name: "Coca Cola - Diet Coke, 300 ml Can (Pack of 24) MRP-₹40/pc", price: "₹520", image: "assets/dc.png", category: "Beverages & Mixers", description: "Zero calorie Diet Coke, perfect for a refreshing break.Stay light, crisp, and refreshed with Diet Coke — the iconic sugar-free soft drink with the same bold, fizzy taste you love, minus the calories. Perfect for those who crave flavor without compromise, it’s the ultimate guilt-free companion for any meal or break. No sugar, no guilt, just pure cola vibes in every sip.", packSize: "24×300 ml" },
    { name: "toothpaste- colgate 50gm(pack of 12)MRP-₹50/pc", price:"₹600", image: "assets/colgate.jpg", category:"Toiletries ", description:"Colgate toothpaste, trusted for healthy teeth and fresh breath.", packSize:"12×50 gm"},
    {
  name: "Tata Salt, 1 kg",
  price: "₹28",
  image: "assets/tata salt.jpg",
  category: "Masala,Salt and Sugar",
  description: "Tata Salt is India's most trusted iodized salt, promoting good health by ensuring adequate iodine intake.",
  packSize: "1 kg"

},
{
  name: "Aashirvaad Atta, 5 kg",
  price: "₹240",
  image: "assets/ashirvad.jpg",
  category: "Daily Essentials",
  description: "High-quality whole wheat flour for soft and nutritious rotis. Made from 100% MP Sharbati wheat.",
  packSize: "5 kg"
},
{
  name: "Basmati Rice, 1 kg",
  price: "₹110",
  image: "assets/Basmati.jpeg",
  category: "Daily Essentials",
  description: "Premium long-grain basmati rice, ideal for biryanis and pulaos. Aromatic and fluffy when cooked.",
  packSize: "1 kg"
},
{
  name: "Tata Tea Gold, 250 gm",
  price: "₹130",
  image: "assets/tatatea.jpg",
  category: "Beverages & Mixers",
  description: "A rich blend of long tea leaves and aromatic Assam tea for a refreshing cup of chai.",
  packSize: "250 gm"
},
{
  name: "Surf Excel Matic Liquid Detergent, 1 L",
  price: "₹220",
  image: "assets/download.jpg",
  category: "Toiletries",
  description: "Effective liquid detergent for top & front load washing machines. Removes stains easily without damage.",
  packSize: "1 Litre"
},
{
  name: "Vim Dishwash Gel, 500 ml",
  price: "₹95",
  image: "assets/vim.jpg",
  category: "Toiletries",
  description: "Removes tough grease with the power of lemons. Gentle on hands and safe for all utensils.",
  packSize: "500 ml"
},
{
  name: "Toor Dal, 1 kg",
  price: "₹125",
  image: "assets/toor dal.jpg",
  category: "Daily Products",
  description: "Protein-rich pigeon peas, essential for making traditional Indian dals and sambar.",
  packSize: "1 kg"
},
{
  name: "Fortune Sunflower Oil, 1 L",
  price: "₹130",
  image: "assets/sunfloweroil.jpg",
  category: "Edible Oil",
  description: "Light, healthy, and heart-friendly cooking oil made from refined sunflower seeds.",
  packSize: "1 Litre"
},
{
  name: "Lifebuoy Handwash, 200 ml",
  price: "₹55",
  image: "assets/handwash.jpg",
  category: "Toiletries",
  description: "Kills 99.9% germs and keeps hands hygienically clean and soft with every wash.",
  packSize: "200 ml"
},
{
  name: "Maggi 2-Minute Noodles, 70 gm (Pack of 6)",
  price: "₹78",
  image: "assets/maggi.jpg",
  category: "Frozen & Instant Food",
  description: "India’s favorite instant noodles with signature masala taste, ready in just 2 minutes.",
  packSize: "6 × 70 gm"
},
{
  name: "Almonds (Badam), 500 gm",
  price: "₹450",
  image: "assets/badam.jpg",
  category: "Dry Fruits",
  description: "Premium quality whole almonds, rich in Vitamin E, fiber, and healthy fats. Perfect for snacking or adding to desserts.",
  packSize: "500 gm"
},
{
  name: "Cashews (Kaju), 500 gm",
  price: "₹520",
  image: "assets/kaju.jpg",
  category: "Dry Fruits",
  description: "Delicious whole cashew nuts packed with protein and healthy fats. Great for snacking or cooking.",
  packSize: "500 gm"
},
{
  name: "Raisins (Kishmish), 500 gm",
  price: "₹210",
  image: "assets/kismisha.jpeg",
  category: "Dry Fruits",
  description: "Naturally sweet and chewy raisins packed with antioxidants and iron. Perfect for snacks and sweets.",
  packSize: "500 gm"
},
{
  name: "Pistachios (Pista), 250 gm",
  price: "₹380",
  image: "assets/pista.jpg",
  category: "Dry Fruits",
  description: "Salted and roasted pistachios, rich in protein and flavor. Ideal for guilt-free munching.",
  packSize: "250 gm"
},
{
  name: "Walnuts (Akhrot), 250 gm",
  price: "₹420",
  image: "assets/akharod.jpg",
  category: "Dry Fruits",
  description: "Crunchy walnut halves rich in omega-3, antioxidants, and healthy fats. Good for brain health.",
  packSize: "250 gm"
},
{
  name: "Dates (Khajoor), 500 gm",
  price: "₹150",
  image: "assets/khajoor.jpg",
  category: "Dry Fruits",
  description: "Naturally sweet, soft dates full of fiber and minerals. Great energy booster.",
  packSize: "500 gm"
},
{
  name: "Dry Figs (Anjeer), 250 gm",
  price: "₹340",
  image: "assets/anjeer.jpg",
  category: "Dry Fruits",
  description: "Soft and chewy dried figs, a natural source of calcium, iron, and fiber.",
  packSize: "250 gm"
},
{
  name: "Mixed Dry Fruits Combo, 1 kg",
  price: "₹950",
  image: "assets/mixdryfruits.jpg",
  category: "Dry Fruits",
  description: "A nutritious combo of almonds, cashews, pistachios, raisins, and walnuts. Perfect for gifting or daily nutrition.",
  packSize: "1 kg"
},
{
 name: "Apple, 1 kg",
 price:"₹200",
 image:"assets/apple.jpg",
 category:"Fruits",
 description:"Fresh and juicy apples, rich in fiber and vitamins.",
 packSize:"1 kg"
}
 ];

  // keep track of filtered subset & quantities
  let filteredProducts = [...products];
  const quantities = new Array(products.length).fill(0);

  // Render products into grid
  function renderProducts(list) {
    productSection.innerHTML = "";
    if (!list.length) {
      productSection.innerHTML = "<p>No products found</p>";
      return;
    }
    list.forEach((p, idx) => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.dataset.productIndex = idx;

      // choose between ADD button or qty controller
      const qty = quantities[idx];
      const controlHTML = qty === 0
        ? `<button class="addBtn">ADD +</button>`
        : `
          <div class="quantity-controller">
            <button class="minus">−</button>
            <span class="quantity">${qty}</span>
            <button class="plus">+</button>
          </div>
        `;

      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}" class="product-image" />
        <h3>${p.name}</h3>
        <h4>${p.price}</h4>
        <p><strong>Category:</strong> ${p.category}</p>
        <div class="add-button-container">${controlHTML}</div>
      `;
      productSection.appendChild(div);
    });
  }

  // Delegate clicks: ADD, +, −, or card (modal)
  productSection.addEventListener("click", e => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const idx = parseInt(card.dataset.productIndex, 10);

    // ADD + button
    if (e.target.matches(".addBtn")) {
      quantities[idx] = 1;
      renderProducts(filteredProducts);
      return;
    }

    // plus button
    if (e.target.matches(".plus")) {
      quantities[idx]++;
      renderProducts(filteredProducts);
      return;
    }

    // minus button
    if (e.target.matches(".minus")) {
      quantities[idx] = Math.max(0, quantities[idx] - 1);
      renderProducts(filteredProducts);
      return;
    }

    // else: clicked the card itself → open modal
    const prod = filteredProducts[idx];
    if (prod) {
      modalProductImage.src               = prod.image;
      modalProductImage.alt               = prod.name;
      modalProductName.textContent        = prod.name;
      modalProductPrice.textContent       = `Price: ${prod.price}`;
      modalProductCategory.textContent    = `Category: ${prod.category}`;
      modalProductDescription.textContent = prod.description || "N/A";
      modalProductPackSize.textContent    = `Pack Size: ${prod.packSize || "N/A"}`;
      productModal.classList.add("visible");
    }
  });

  // Close modal
  closeButton.addEventListener("click", () => {
    productModal.classList.remove("visible");
  });
  productModal.addEventListener("click", e => {
    if (e.target === productModal) {
      productModal.classList.remove("visible");
    }
  });

  // Search & category filters
  function applyFilters() {
    const term = searchBar.value.trim().toLowerCase();
    const cat  = document.querySelector("input[name='category']:checked").value;

    filteredProducts = products.filter((p, i) => {
      const matchText = p.name.toLowerCase().includes(term);
      const matchCat  = cat === "All" || p.category === cat;
      return matchText && matchCat;
    });

    renderProducts(filteredProducts);
  }
  searchBar.addEventListener("input", applyFilters);
  categoryList.addEventListener("change", applyFilters);

  // Initial render
  renderProducts(products);
});
// Update cart count dynamically from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const cartCountEl = document.getElementById("cartCount");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartCountEl.textContent = cartItems.length;
});

