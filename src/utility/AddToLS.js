const getReadBooks = () => {
  const getData = localStorage.getItem("readList");

  if (getData) {
    const storedBooksData = JSON.parse(getData);
    return storedBooksData;
  } else {
    return [];
  }
};

const readListToSLS = (ID) => {
  const BooksDataLS = getReadBooks();

  if (BooksDataLS.includes(ID)) {
    alert(`This Book Already Added to the Read List`);
  } else {
    BooksDataLS.push(ID);
    const convertDataToStringify = JSON.stringify(BooksDataLS);
    localStorage.setItem("readList", convertDataToStringify);
  }
};

const getWishListBooks = () => {
  const getData = localStorage.getItem("WishList");

  if (getData) {
    const storedBooksData = JSON.parse(getData);
    return storedBooksData;
  } else {
    return [];
  }
};

const wishListToSLS = (ID) => {
  const BooksDataLS = getWishListBooks();

  if (BooksDataLS.includes(ID)) {
    alert(`This Book Already Added to the Wish List`);
  } else {
    BooksDataLS.push(ID);
    const convertDataToStringify = JSON.stringify(BooksDataLS);
    localStorage.setItem("WishList", convertDataToStringify);
  }
};

export { getReadBooks, readListToSLS, getWishListBooks, wishListToSLS };
