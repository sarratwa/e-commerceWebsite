//remplir la liste des produits dans la page produit PRODUCTS

var produits =[
	{img: "../images/glasses2w.jpg", name: "Pink glasses", rating:"4" ,prix: "75.00TN", motCle: "Accessories"},
	{img: "../images/glassesw.jpg", name: "Black Glasses", rating:"4.5" ,prix: "50.00TN", motCle: "Accessories"},
	{img: "../images/jacket2.jpg", name: "Black Jacket", rating:"4" ,prix: "70.00TN", motCle: "Man"},
	{img: "../images/pants1.jpg", name: "Military Pants", rating:"4" ,prix: "45.00TN", motCle: "Man"},
	{img: "../images/pants1w.jpg", name: "Nude Pants", rating:"4.5" ,prix: "50.00TN", motCle: "Women"},
	{img: "../images/pants2.jpg", name: "Jeans", rating:"3.5" ,prix: "35.00TN", motCle: "Man"},
	{img: "../images/pants2w.png", name: "Baggy Jeans", rating:"3.5" ,prix: "40.00TN", motCle: "Women"},
	{img: "../images/pants3.jpg", name: "kaky Jeans", rating:"4" ,prix: "45.00TN", motCle: "Man"},
	{img: "../images/shirt1.jpg", name: "Military shirt", rating:"4" ,prix: "45.50TN", motCle: "Man"},
	{img: "../images/shirt2.jpg", name: "Black&White shirt", rating:"4.5" ,prix: "45.50TN", motCle: "Man"},
	{img: "../images/shirt3.jpg", name: "Blue shirt", rating:"3.5" ,prix: "45.50TN", motCle: "Man"},
	{img: "../images/shirt4.jpg", name: "Red shirt", rating:"4" ,prix: "45.50TN", motCle: "Man"},
	{img: "../images/shoes1w.jpg", name: "adidas Ultraboost Shoes", rating:"5" ,prix: "60.00TN", motCle: "Accessories"},
	{img: "../images/shoes2w.jpg", name: "Black Higheels", rating:"4.5" ,prix: "65.00TN", motCle: "Accessories"},
	{img: "../images/shorts1w.jpg", name: "Jean shorts", rating:"3.5" ,prix: "35.00TN", motCle: "Women"},
	{img: "../images/shorts2w.jpg", name: "White Summer Shorts", rating:"4" ,prix: "45.00TN", motCle: "Women"},
	{img: "../images/watch1.jpeg", name: "Grey Fossil watch", rating:"3" ,prix: "75.00TN", motCle: "Accessories"},
	{img: "../images/watch2.jpg", name: "Blue Gucci watch", rating:"3.5" ,prix: "95.00TN", motCle: "Accessories"},
	{img: "../images/watch4.jpg", name: "Black Obaku warch", rating:"4" ,prix: "80.00TN", motCle: "Accessories"},
	{img: "../images/offer.png", name: "Hwaiwe smart watch", rating:"4.5" ,prix: "120.00TN", motCle: "Accessories"},
	{img: "../images/hat1.jpg", name: "Frog Hat", rating:"4.5" ,prix: "20.00TN", motCle: "Accessories"},
	{img: "../images/hat2.jpg", name: "Bear Winter Hat", rating:"4" ,prix: "25.00TN", motCle: "Accessories"},
	{img: "../images/hat3.jpg", name: "Summer Hat", rating:"4.5" ,prix: "20.00TN", motCle: "Accessories"},
	{img: "../images/bag1.jpg", name: "Bag", rating:"3" ,prix: "40.00TN", motCle: "Accessories"},
	{img: "../images/dress1.jpg", name: "Summer Dress", rating:"4" ,prix: "70.00TN", motCle: "Women"},
	{img: "../images/dress2.jpg", name: "Spring or Summer Dress", rating:"4.5" ,prix: "90.00TN", motCle: "Women"},
	{img: "../images/dress3.jpg", name: "Colorfull Summer Dress", rating:"5" ,prix: "100.00TN", motCle: "Women"},
	{img: "../images/skirt1.jpg", name: "Cute Pink Skirt", rating:"3.5" ,prix: "35.00TN", motCle: "Women"},
  ];
  
  //remplir liste des users & admin
  
  var users = [
	  {username : "",city : "",birthday : "", email : "admin@gmail.com", password:"admin", statut:"admin"},
	  {username : "sara",city : "ezzahra",birthday : "22/08/2000",email : "sarra@gmail.com", password:"sara", statut:"user"},
	  {username : "amouna",city : "rades",birthday : "07/10/2007",email : "emna@gmail.com", password:"emna", statut:"user"},
	  {username : "aloulou",city : "borj-cedria",birthday : "05/02/1998",email : "ali@gmail.com", password:"ali", statut:"user"},
  ];
  
  //Javascript for slide show PAGE1
  function displayNextImage() {
	x = (x === images.length - 1) ? 0 : x + 1;
	document.getElementById("img").src = images[x];
  }
  
  function startTimer() {
	setInterval(displayNextImage, 3000);        
  }
  
  //Menu toggle function for responsive website PAGE1
  function menutoggle() {
	var MenuItems = document.getElementById("MenuItems");
	if (MenuItems.style.maxHeight === "0px") {
	   MenuItems.style.maxHeight = "200px";
	} else {
	  MenuItems.style.maxHeight = "0px";
	}
  }
  
  //add to the list a product
  function add (item_list, product, column){
	  item_list += '<div class="'+ column +'">';
	  item_list += '<img src= "'+product.img +'" onclick="open_product(this.src)">';
	  item_list += '<h4>'+ product.name +'</h4>';
	  item_list += '<div class="ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>';
	  switch(product.rating) {
		  case "3":
			  item_list += ' <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div>';
			  break;
			case "3.5":
			  item_list += ' <i class="fa fa-star-half-o"></i> <i class="fa fa-star-o"></i> </div>';
			  break;
		  case "4":
			  item_list += ' <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div>';
			  break;
			case "4.5":
			  item_list += ' <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i> </div>';
			  break;
			default:
			  item_list += ' <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>';
	  }
	  item_list += '<p>'+product.prix+'</p>';
	  item_list += '</div>';
	  return item_list;
  }
  
  //diplay a list of products for latest products 
  
  function display_specificProducts (list_products, column, divPlacement){
	  var new_products = "";
	  for (var i in list_products) {
			  new_products = add(new_products, produits[list_products[i]], column);
	  }	
	  var outputDivIndex = document.getElementById(divPlacement);
	   outputDivIndex.innerHTML = new_products;
  }
  
  //Create Buttons
  function create_button (id){
	  var div_PageNumbers = document.getElementById("pages");
	  button += '<div class="col-7">';
	  button += '<button id="'+ id +'" onClick="diplayPage(this.id)" > '+ id +' </button>';
	  button += '</div>';	
	  div_PageNumbers.innerHTML = button;	
  }
  
  //displays form productw when it's featured and from Filtered_List_Products_Indexs when we're using anathor filter
  
  function display (first, last, isfiltered, Filtered_List_Products_Indexs){
	  var all_products = "";
	  if ((isfiltered == true) && (Filtered_List_Products_Indexs.length < 16) ){
		  last = Filtered_List_Products_Indexs.length;
	  }
	  for (var i =first; i < last ; i++){
		  if (isfiltered == true) {
			  all_products = add(all_products, produits[Filtered_List_Products_Indexs[i]],'col-6');
		  }else {
			  all_products = add(all_products, produits[i],'col-6');
		  }
	  }
	  var outputDivProducts = document.getElementById("output");
	   outputDivProducts.innerHTML = all_products;
  }
  
  //the functions that display the contents of page selon id
  
  function clearcontent(elementID) {
	  document.getElementById(elementID).innerHTML = "";
  }
  
  function diplayPage(id) {
	  clearcontent('output');
	  var liste_produits;
	  if (id == "1"){
		  first = 0;
		  last = 16;
	  }else {
		  if (filter == "featured"){
			  liste_produits = produits;
		  } else {
			  liste_produits = Filtered_List_Products_Indexs;
		  }
		  first = (parseInt(id)-1)*16;
		  if ((first + 16) > liste_produits.length ) {
			  last = liste_produits.length  ;
		  }else {
			  last = first + 16;
		  }
	  }
	  if (filter == "featured"){
		  display(first, last, false, Filtered_List_Products_Indexs);
	  }else {
		  display(first, last, true, Filtered_List_Products_Indexs);
	  }
	  window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  //function that returns the products in an orderd list ranging from low price to high price
  function fillup_LowHigh (){
	  var placed = false;
	  var list=[0];
	  if (parseFloat(produits[0].prix) <= parseFloat(produits[1].prix) ) {
		  list.push(1);
	  }else {
		  list.splice(0, 0, 1);
	  }
	  for (var i = 2; i < produits.length ; i++) {
		  placed = false;
		  for (var j = 0; j < list.length ; j++) {
			  if ( parseFloat(produits[i].prix) <= parseFloat(produits[list[j]].prix) ) {
				  list.splice(j, 0, i);
				  placed=true;
				  break;
			  } 
		  }
		  if (placed == false) {
			  list.splice(list.length, 0, i);
		  }
	  }
	  Filtered_List_Products_Indexs = list;
	  return (list);
  }
  
  //function that returns the products in an orderd list ranging from high price to low price
  function fillup_HighLow (){
	  var placed = false;
	  var list=[0];
	  if (parseFloat(produits[0].prix) >= parseFloat(produits[1].prix) ) {
		  list.push(1);
	  }else {
		  list.splice(0, 0, 1);
	  }
	  for (var i = 2; i < produits.length ; i++) {
		  placed = false;
		  for (var j = 0; j < list.length ; j++) {
			  if ( parseFloat(produits[i].prix) >= parseFloat(produits[list[j]].prix) ) {
				  list.splice(j, 0, i);
				  placed=true;
				  break;
			  } 
		  }
		  if (placed == false) {
			  list.splice(list.length, 0, i);
		  }
	  }
	  Filtered_List_Products_Indexs = list;
	  return (list);
  }
  
  //function that returns the products in an orderd list of categories
  function fillup_Categ (categorie){
	  var list = [];
	  var mc;
	  if (categorie == "W"){
		  mc = "Women";
	  }else if (categorie == "M"){
		  mc = "Man";
	  }else {
		  mc = "Accessories";
	  }
	  for (var i=0; i<produits.length ; i++) {
		  if (produits[i].motCle == mc) {
			  list.push(i);
		  }
	  }
	  Filtered_List_Products_Indexs = list;
	  return (list);
  }
  
  //the function that chooses which filter to sort with
  function sort(value) {
	  var first = 0;
	  var last = 16;
	  var List;
	  if (value == "featured"){
		  filter ="featured";
		  clearcontent('output');
		  display(first, last, false, Filtered_List_Products_Indexs);
	  }else if (value == "LowHigh"){
		  filter ="LowHigh";
		  clearcontent('output');
		  List = [];
		  List = fillup_LowHigh();
		  display(first, last, true, Filtered_List_Products_Indexs);
	  }else if (value == "HighLow"){
		  filter ="HighLow";
		  clearcontent('output');
		  List = [];
		  List = fillup_HighLow();
		  display(first, last, true, Filtered_List_Products_Indexs);
	  }else if (value == "New"){
		  filter ="New";
		  clearcontent('output');
	  }else if (value == "W"){
		  filter ="W";
		  clearcontent('output');
		  List = [];
		  List = fillup_Categ("W");
		  display(first, last, true, Filtered_List_Products_Indexs);
	  }else if (value == "M"){
		  filter ="M";
		  clearcontent('output');
		  List = [];
		  List = fillup_Categ("M");
		  display(first, last, true, Filtered_List_Products_Indexs);
	  }else {
		  filter ="A";
		  clearcontent('output');
		  List = [];
		  List = fillup_Categ("A");
		  display(first, last, true, Filtered_List_Products_Indexs);
	  }
  }
  
  //function open_product that changes the outline of product page and displays the product info
  function open_product (img_src) {
	  var image = img_src.slice(59,img_src.length);
	  image = ".."+ image;
	  var img_source = image;
	  sessionStorage.setItem("img_source", img_source);
	  window.open("./product-detail.html","_self");
  }
  
  //function that will fill up the details of a product in  the page product-detail.html
  function open_detail_product() {
	  var image = sessionStorage.getItem("img_source");
	  document.getElementById("sug").innerHTML="";
	  var divdetail = document.getElementById("bigImg");
	  divdetail.innerHTML = '<img src="'+ image +'">';
  
	  //remplir les info sur le produit clique
	  var pn;
	  var pr;
	  var stars;
	  var categorie;
	  for (let i = 0; i < produits.length; i++) {
		  if (produits[i].img == image) {
			  pn = produits[i].name;
			  pr = produits[i].prix;
			  stars = produits[i].rating;
			  categorie = produits[i].motCle;
			  break;
		  }
	  }
	  document.getElementById("pn").innerHTML = pn;
	  document.getElementById("pprice").innerHTML = pr;
	  document.getElementById("rat-number").innerHTML = stars;
	  var pratings = "";
  
	  pratings += '<div class="ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>';
	  switch(stars) {
		  case "3":
			  pratings += ' <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div>';
			  break;
			case "3.5":
			  pratings += ' <i class="fa fa-star-half-o"></i> <i class="fa fa-star-o"></i> </div>';
			  break;
		  case "4":
			  pratings += ' <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div>';
			  break;
			case "4.5":
			  pratings += ' <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i> </div>';
			  break;
			default:
			  pratings += ' <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>';
	  }
	  document.getElementById("pr").innerHTML = pratings;
	  document.getElementById("pr2").innerHTML = pratings;
  
	  var j = 0;
	  for (let i = 0; i < produits.length; i++) {
		  if  (produits[i].motCle.includes(categorie) )   {
			  document.getElementById("sug").innerHTML += '<img src="'+produits[i].img+'" onclick="open_product (this.src)">';
			  j++;
		  }
		  if (j == 9) {
			  break;
		  }
	  }
  }
  
  //open create account
  function openCreateA() {
	  window.open("./signin.html","_self");
  }
  
  //function to Connect through the login.html page
  function connect() {
	  let loginForm = document.getElementById('signup');
	  var uemail = loginForm.elements.email.value;
	  var upass = loginForm.elements.password.value;
	  var ucity;
	  var ubirth;
	  var uname;
	  let i =0;
	  let find= false;
	  while ((i<users.length) && (find == false)) {
		  if ((users[i].email == uemail) && (users[i].password == upass) ) {
			  find = true;
			  uname=users[i].username;
			  ucity=users[i].city;
			  ubirth=users[i].birthday;
		  }
		  i++;
	  }
	  if (find == true) {
		  logedIn = true;
		  user = uemail;
		  document.getElementById("logged").innerHTML="<br> <br>";
		  var accountInfo ="";
		  accountInfo += '<div class="t"> Account Info </div>';
		  accountInfo +='<div class="inputs"> Username : '+ uname+'</div>';
		  accountInfo +='<div class="inputs"> City : '+ ucity+'</div>';
		  accountInfo +='<div class="inputs"> Birthday : '+ ubirth+'</div>';
		  accountInfo +='<div class="inputs"> Email : '+ uemail+'</div>';
		  accountInfo +='<div class="inputs"> Password : <button onclick="show()"> <i class="fa fa-eye" aria-hidden="true"></i> </button> </div>';
		  accountInfo += '<div class="psw" id="psw">'+ upass +' </div>';
		  accountInfo += '<button type="submit" class="inputs" onclick="ret()"> Back to Home Page </button>';
		  accountInfo += '<button type="submit" class="inputs" onclick="location.reload()"> Log out </button>';
		  document.getElementById("info").innerHTML=accountInfo;
	  } else {
		  document.getElementById("err").style.display = "block";
		  window.scrollTo({ top: 0, behavior: 'smooth' });
		  setTimeout(function() { document.getElementById("err").style.display = "none";}, 3000);
	  }
  }
  
  //function that returns from the log in page to the home page
  function ret(){
	  window.open("./index.html","_self");
  }
  
  //function that shows the password 
  function show() {
	  if (document.getElementById("psw").style.display == "none") {
		  document.getElementById("psw").style.display = "block";
	  }else {
		  document.getElementById("psw").style.display = "none";
	  }
	  
  }
  
  //function when creating an account makes sure that the email or password aren't used
  function create() {
	  let loginForm = document.getElementById('creation');
	  var uemail = loginForm.elements.email.value;
	  var upass = loginForm.elements.password.value;
	  let exists= false;
	  let i =0;
	  while ((i<users.length) && (exists == false)) {
		  if ((users[i].email == uemail) || (users[i].password == upass) ) {
			  exists = true;
		  }
		  i++;
	  }
	  if (exists == true) {
		  document.getElementById("errCreating").style.display = "block";
		  window.scrollTo({ top: 0, behavior: 'smooth' });
		  setTimeout(function() { document.getElementById("errCreating").style.display = "none";}, 3000);
	  }
	  if ( (uemail == "") || (upass =="") ) {
		  document.getElementById("errCreating2").style.display = "block";
		  window.scrollTo({ top: 0, behavior: 'smooth' });
		  document.getElementById("e").focus();
		  document.getElementById("p").focus();
		  setTimeout(function() { document.getElementById("errCreating2").style.display = "none";}, 3000);
	  }
  }

  //contact form
  function contactsucc() {
	if ( (document.getElementById("em").value !== "") && (document.getElementById("re").value !== "") ) {
		document.getElementById("successContact").style.display = "block";
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setTimeout(function() { document.getElementById("successContact").style.display = "none";}, 3000);
	}else {
		document.getElementById("errContact").style.display = "block";
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setTimeout(function() { document.getElementById("errContact").style.display = "none";}, 3000);
	}
	document.getElementById("myForm").reset();
  }
  
  //onload calulate total
  function calculateT() {
	  document.getElementById("total").innerHTML = (parseInt(document.getElementById("subtotal2").innerHTML) + parseInt(document.getElementById("subtotal1").innerHTML));
	  TotalPrice = parseInt(document.getElementById("subtotal2").innerHTML) + parseInt(document.getElementById("subtotal1").innerHTML);
  }
  
  //function to calculate the sub total of a product
  function findSubTotal(idq, idp, idt){
	  var old_value = parseInt(document.getElementById(idt).innerHTML);
	  var q = document.getElementById(idq);
	  var tot = q.value;
	  var pri = 0;
	  pri = parseInt(document.getElementById(idp).innerHTML.slice(0,document.getElementById(idp).innerHTML.length));
	  tot = (tot * pri);
	  document.getElementById(idt).innerHTML = tot;
	  findTotal(old_value,parseInt(document.getElementById(idt).innerHTML) );
  }
  
  //function that caculates the Total
  function findTotal(old_value, new_value){
	  var total = parseInt(document.getElementById("total").innerHTML);
	  total -= old_value;
	  total += new_value;
	  document.getElementById("total").innerHTML = total;
	  TotalPrice = total;
  }
  
  //function that clears the cart
  function clearCart() {
	  document.getElementById("cart-list").innerHTML="";
  }
  
  //function to apply a coupon 
  function applyC() {
	  var total = parseInt(document.getElementById("total").innerHTML);
	  var couponCode = document.getElementById("couponCode").value;
	  if ((couponCode =="#C8E23") && (used == false)) {
		  used = true;
		  total = (total - (0.15 * total));
		  document.getElementById("successC").style.display = "block";
		  window.scrollTo({ top: 0, behavior: 'smooth' });
		  setTimeout(function() { document.getElementById("successC").style.display = "none";}, 3000);
	  } else {
		  document.getElementById("errCoupon").style.display = "block";
		  setTimeout(function() { document.getElementById("errCoupon").style.display = "none";}, 3000);
	  }
	  document.getElementById("total").innerHTML = total;
	  TotalPrice = total;
  }
  
  //function that finalises the purchase
  function proccedToCheckOut() {
	  document.getElementById("tobecleared1").style.display = "none";
	  document.getElementById("tobecleared2").style.display = "none";
	  document.getElementById("tobecleared3").style.display = "none";
	  document.getElementById("quantity1").disabled = true;
	  document.getElementById("quantity2").disabled = true;
	  document.getElementById("cart-list-checkout").innerHTML+='<figure> <img class="doneimg" src="../images/done.png"> <figcaption> Thank You For Your Purchase! <br> Your Order Is Being Proccessed. <br>  <br>  Total : '+ TotalPrice + '<br> Payement Will Be On Delivery </figcaption> </figure>';
  }
  
  //------------------------------------------------------------------------------------------
  
  //The slides PAGE1
  var images = []; 
  var x = -1;
  if ( document.URL.includes("index.html") ) {
	  images = [];
	  images[0] = "../images/slide1.png";
	  images[1] = "../images/slide2.png";
	  images[2] = "../images/slides3.png";
  }else {
	  images = [];
	  images[0] = "../images/shopping1.jpg";
	  images[1] = "../images/shopping2.jpg";
	  images[2] = "../images/shopping3.jpg";
	  images[3] = "../images/shopping4.jpg";
	  images[4] = "../images/shopping5.jpg";
  }
  
  //display the 8 latest product on the index page
  if  ( document.URL.includes("index.html") ){
	  var latest_products = [1,3,5,7,9,11,12,13];
	  display_specificProducts(latest_products,'col-4',"ouput_latest");
  }
  
  // initialize the products of the first page
  var first =0;
  var last = 16;
  if ( document.URL.includes("products.html") ) {
	  //display products 
  
	  display(first, last, false, Filtered_List_Products_Indexs);
  
	  //function to create page buttons
  
	  var button ='';
  
	  var numberofPages = Math.ceil(produits.length / 16);
	  for (var i = 1; i <= numberofPages; i++) {
		  create_button (i.toString());
	  }
  }
  
  // Variable filter to let the program know what filter we 're using
  var filter ="featured";
  
  // This is an array which has the Filtered Products ' INDEXES
  var Filtered_List_Products_Indexs = [];
  
  //current status & loged in info 
  var logedIn = false;
  var user = "";
  
  //coupon used
  var used=false;
  if ( document.URL.includes("cart.html") ) {
  var TotalPrice= parseInt(document.getElementById("total").innerHTML);
  }
  
  //opening other windows
  
  if ( document.URL.includes("product-detail.html") ) {
	  open_detail_product();
  }