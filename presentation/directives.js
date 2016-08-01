exports.addToCart = function() {
  return {
    controller: 'AddToCartController',
    templateUrl: '/presentation/templates/add_to_cart.html'
  };
};

exports.categoryProducts = function() {
  return {
    controller: 'CategoryProductsController',
    templateUrl: '/presentation/templates/category_products.html'
  }
};

exports.categoryTree = function() {
  return {
    controller: 'CategoryTreeController',
    templateUrl: '/presentation/templates/category_tree.html'
  }
};

exports.checkout = function() {
  return {
    controller: 'CheckoutController',
    templateUrl: '/presentation/templates/checkout.html'
  };
};

exports.navBar = function() {
  return {
    controller: 'NavBarController',
    templateUrl: '/presentation/templates/nav_bar.html'
  };
};

exports.productDetails = function() {
  return {
    controller: 'ProductDetailsController',
    templateUrl: '/presentation/templates/product_details.html'
  };
};

exports.searchBar = function() {
  return {
    controller: 'SearchBarController',
    templateUrl: '/presentation/templates/search_bar.html'
  };
};
