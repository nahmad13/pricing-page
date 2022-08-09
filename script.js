const pricing = {
  pakistan: {
    currency: " PKR",
    monthly: {
      basic: {
        discount: [100, 90, 80, 70, 60, 50],
        actual: [200, 180, 160, 140, 120, 100],
      },
      standard: {
        discount: [10, 9, 8, 7, 6, 5],
        actual: [20, 18, 16, 14, 12, 10],
      },
      server: [500000, 1000000],
    },
    yearly: {
      basic: {
        discount: [1000, 900, 800, 700, 600, 500],
        actual: [2000, 1800, 1600, 1400, 1200, 1000],
      },
      standard: {
        discount: [100, 90, 80, 70, 60, 50],
        actual: [200, 180, 160, 140, 120, 100],
      },
      server: [5000000, 10000000],
    },
  },
  bangladesh: {
    currency: " TK",
    monthly: {
      basic: {
        discount: [100, 90, 80, 70, 60, 50],
        actual: [200, 180, 160, 140, 120, 100],
      },
      standard: {
        discount: [10, 9, 8, 7, 6, 5],
        actual: [20, 18, 16, 14, 12, 10],
      },
      server: [500000, 1000000],
    },
    yearly: {
      basic: {
        discount: [1000, 900, 800, 700, 600, 500],
        actual: [2000, 1800, 1600, 1400, 1200, 1000],
      },
      standard: {
        discount: [100, 90, 80, 70, 60, 50],
        actual: [200, 180, 160, 140, 120, 100],
      },
      server: [5000000, 10000000],
    },
  },
  india: {
    currency: " INR",
    monthly: {
      basic: {
        discount: [100, 90, 80, 70, 60, 50],
        actual: [200, 180, 160, 140, 120, 100],
      },
      standard: {
        discount: [10, 9, 8, 7, 6, 5],
        actual: [20, 18, 16, 14, 12, 10],
      },
      server: [500000, 1000000],
    },
    yearly: {
      basic: {
        discount: [1000, 900, 800, 700, 600, 500],
        actual: [2000, 1800, 1600, 1400, 1200, 1000],
      },
      standard: {
        discount: [100, 90, 80, 70, 60, 50],
        actual: [200, 180, 160, 140, 120, 100],
      },
      server: [5000000, 10000000],
    },
  },
  qatar: {
    currency: " QAR",
    monthly: {
      basic: {
        discount: [200, 175, 150, 125, 100, 100],
        actual: [400, 350, 300, 250, 200, 200],
      },
      standard: {
        discount: [2, 1.75, 1.5, 1.25, 1, 1],
        actual: [4, 3.5, 3, 2.5, 2, 2],
      },
      server: [20000, 40000],
    },
    yearly: {
      basic: {
        discount: [2000, 1750, 1500, 1250, 1000, 1000],
        actual: [4000, 3500, 3000, 2500, 2000, 2000],
      },
      standard: {
        discount: [20, 17.5, 15, 12.5, 10, 10],
        actual: [40, 35, 30, 25, 20, 20],
      },
      server: [200000, 400000],
    },
  },
  others: {
    currency: " USD",
    monthly: {
      basic: {
        discount: [5, 4.5, 4, 3.5, 3, 2.5],
        actual: [10, 9, 8, 7, 6, 5],
      },
      standard: {
        discount: [0.5, 0.45, 0.4, 0.35, 0.3, 0.25],
        actual: [1, 0.9, 0.8, 0.7, 0.6, 0.5],
      },
      server: [5000, 10000],
    },
    yearly: {
      basic: {
        discount: [50, 45, 40, 35, 30, 25],
        actual: [100, 90, 80, 70, 60, 50],
      },
      standard: {
        discount: [5, 4.5, 4, 3.5, 3, 2.5],
        actual: [10, 9, 8, 7, 6, 5],
      },
      server: [50000, 100000],
    },
  },
  categories: {
    basic: [
      "0-200",
      "200-400",
      "400-600",
      "600-800",
      "800-1000",
      "Quantity > 1000",
    ],
    standard: [
      "0-2000",
      "2000-4000",
      "4000-6000",
      "6000-8000",
      "8000-10000",
      "Quantity > 10000",
    ],
  },
};
document
  .querySelector("nav .select-wrapper")
  .addEventListener("click", function () {
    this.querySelector(".select").classList.toggle("open");
  });

for (const option of document.querySelectorAll("nav .custom-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".select").querySelector(
        ".select__trigger div"
      ).textContent = this.textContent;
    }
  });
}
window.addEventListener("click", function (e) {
  const select = document.querySelector(".select");
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});
function dropdown(query) {
  document
    .querySelector(query + " .select-wrapper .select")
    .classList.toggle("open");

  for (const option of document.querySelectorAll(query + " .custom-option")) {
    option.addEventListener("click", function () {
      if (!this.classList.contains("selected")) {
        this.parentNode
          .querySelector(".custom-option.selected")
          .classList.remove("selected");
        this.classList.add("selected");
        this.closest(".select").querySelector(
          ".select__trigger div"
        ).textContent = this.textContent;
        if (this.hasAttribute("data-country")) {
          this.closest(".select").querySelector(
            ".select__trigger div"
          ).dataset.country = this.dataset.country;
        }
        if (this.hasAttribute("data-quantity")) {
          this.closest(".select").querySelector(
            ".select__trigger div"
          ).dataset.quantity = this.dataset.quantity;
        }
      }
    });
    let basicActualPrice = document.querySelector("#basic-act h3");
    let standardActualPrice = document.querySelector("#sd-act h3");
    let serverActualPrice = document.querySelector("#sv-act h3");
    let basicDiscountPrice = document.querySelector("#basic-disc h1");
    let standardDiscountPrice = document.querySelector("#sd-disc h1");
    let serverDiscountPrice = document.querySelector("#sv-disc h1");
    let bIndex;
    let sIndex;
    let cont = document.querySelector("#country").dataset.country;
    let box = document.querySelector("#price-filter");
    let bcategory = document.querySelector("#bc").textContent;
    let scategory = document.querySelector("#sc").textContent;
    if (pricing[cont]) {
      if (!box.checked) {
        bIndex = pricing.categories.basic.indexOf(bcategory);
        sIndex = pricing.categories.standard.indexOf(scategory);
        basicActualPrice.textContent =
          pricing[cont].monthly.basic.actual[bIndex] + pricing[cont].currency;
        basicDiscountPrice.textContent =
          pricing[cont].monthly.basic.discount[bIndex] + pricing[cont].currency;
        standardActualPrice.textContent =
          pricing[cont].monthly.standard.actual[sIndex] +
          pricing[cont].currency;
        standardDiscountPrice.textContent =
          pricing[cont].monthly.standard.discount[sIndex] +
          pricing[cont].currency;
        serverActualPrice.textContent =
          pricing[cont].monthly.server[1] + pricing[cont].currency;
        serverDiscountPrice.textContent =
          pricing[cont].monthly.server[0] + pricing[cont].currency;
      } else if (box.checked) {
        bIndex = pricing.categories.basic.indexOf(bcategory);
        sIndex = pricing.categories.standard.indexOf(scategory);
        basicActualPrice.textContent =
          pricing[cont].yearly.basic.actual[bIndex] + pricing[cont].currency;
        basicDiscountPrice.textContent =
          pricing[cont].yearly.basic.discount[bIndex] + pricing[cont].currency;
        standardActualPrice.textContent =
          pricing[cont].yearly.standard.actual[sIndex] + pricing[cont].currency;
        standardDiscountPrice.textContent =
          pricing[cont].yearly.standard.discount[sIndex] +
          pricing[cont].currency;
        serverActualPrice.textContent =
          pricing[cont].yearly.server[1] + pricing[cont].currency;
        serverDiscountPrice.textContent =
          pricing[cont].yearly.server[0] + pricing[cont].currency;
      }
    }
  }
  window.addEventListener("click", function (e) {
    const select = document.querySelector(query + " .select");
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  });
}
function setActive(query) {
  for (const cards of document.querySelectorAll(".cards")) {
    cards.classList.remove("active");
  }
  document.querySelector(query).classList.add("active");
}
document
  .querySelector(".pricing-container")
  .addEventListener("click", function (e) {
    if (e.target.closest(".pricing-switching")) {
      dropdown(".pricing-switching");
    } else if (e.target.closest(".card-basic")) {
      dropdown(".card-basic");
      setActive(".card-basic");
    } else if (e.target.closest(".card-standard")) {
      dropdown(".card-standard");
      setActive(".card-standard");
    } else if (e.target.closest(".card-server")) {
      setActive(".card-server");
    }
  });

// Faq tquestions toogle
document
  .querySelector(".faq-questions")
  .addEventListener("click", function (e) {
    e.target
      .closest(".questions")
      .querySelector(".arrow i")
      .classList.toggle("fa-angle-down");
    e.target
      .closest(".questions")
      .querySelector(".arrow i")
      .classList.toggle("fa-angle-up");
    e.target
      .closest(".questions")
      .querySelector(".question-content")
      .classList.toggle("active");
    e.target.closest(".questions").classList.toggle("active");
  });
