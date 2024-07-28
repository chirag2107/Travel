const destinations = [
    {
      name: "Taj Mahal, Agra",
      Image: [
        "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1524613032530-449a5d94c285?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      information: "The Taj Mahal, located in Agra, is a magnificent white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is a UNESCO World Heritage Site and one of the Seven Wonders of the World.",
      hotels: [
        {
          name: "The Oberoi Amarvilas",
          address: "Taj East Gate Road, Agra, Uttar Pradesh"
        },
        {
          name: "ITC Mughal",
          address: "Taj Ganj, Agra, Uttar Pradesh"
        }
      ]
    },
    {
      name: "Jaipur, Rajasthan",
      Image: [
        "https://images.unsplash.com/photo-1706961121783-4ae6c933983a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1705861144942-bcf9e7e3bebd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      information: "Jaipur, also known as the Pink City, is the capital of Rajasthan. It is famous for its historic palaces and forts, including the Hawa Mahal and the Amber Fort.",
      hotels: [
        {
          name: "Taj Rambagh Palace",
          address: "Bhawani Singh Road, Jaipur, Rajasthan"
        },
        {
          name: "The Oberoi Rajvilas",
          address: "Goner Road, Jaipur, Rajasthan"
        }
      ]
    },
    {
      name: "Varanasi, Uttar Pradesh",
      Image: [
        "https://media.istockphoto.com/id/516984446/photo/varanasi-burning-grounds-at-night.jpg?s=1024x1024&w=is&k=20&c=ZM0r_bfED-_NSK8aWXFpD5S4na2CPrzFghdTwN1hW58=",
        "https://images.unsplash.com/photo-1713922639539-42572e58cbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FuZ2ElMjBhYXJ0aSUyMGluJTIwdmFyYW5zaXxlbnwwfHwwfHx8MA%3D%3D"
      ],
      information: "Varanasi, also known as Kashi, is one of the oldest living cities in the world. It is a major religious hub in India, known for its ghats along the Ganges River and the evening Ganga Aarti.",
      hotels: [
        {
          name: "BrijRama Palace",
          address: "Munshi Ghat, Darbhanga Ghat, Varanasi, Uttar Pradesh"
        },
        {
          name: "Taj Nadesar Palace",
          address: "Nadesar Palace Grounds, Varanasi, Uttar Pradesh"
        }
      ]
    },
    {
      name: "Udaipur, Rajasthan",
      Image: [
        "https://plus.unsplash.com/premium_photo-1697730426227-9056296a0315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVkYWlwdXJ8ZW58MHx8MHx8fDA%3D",
        "https://media.istockphoto.com/id/1343698822/photo/udaipur-city-palace-beside-beautiful-lake-pichola-at-udaipur-rajasthan-india.jpg?s=1024x1024&w=is&k=20&c=yYWmEsPqXUcVwK7WpsFhJyUM-0vNozsFwhDt8HcbEjo="
      ],
      information: "Udaipur, also known as the City of Lakes, is a beautiful city in Rajasthan. It is famous for its lakes, palaces, and vibrant culture.",
      hotels: [
        {
          name: "Taj Lake Palace",
          address: "Pichola, Udaipur, Rajasthan"
        },
        {
          name: "The Oberoi Udaivilas",
          address: "Haridasji Ki Magri, Udaipur, Rajasthan"
        }
      ]
    },
    {
      name: "Hampi, Karnataka",
      Image: [
        "https://media.istockphoto.com/id/857104304/photo/panorama-of-hampi-view-of-the-virupaksha-temple.webp?b=1&s=170667a&w=0&k=20&c=CYOVnF2sQGEA9h-vTSYRa_3fnsb2w2JjepQ2XSZuj_Y=",
        "https://media.istockphoto.com/id/545790826/photo/morning-with-pigeons.webp?b=1&s=170667a&w=0&k=20&c=qvXS7SApG89D8gDXN7HLCzgbbb7J0IJvlfp9OwrxOTE="
      ],
      information: "Hampi is an ancient village in Karnataka, known for its ruins of Vijayanagara Empire. It is a UNESCO World Heritage Site.",
      hotels: [
        {
          name: "Evolve Back, Hampi",
          address: "Hampi, Karnataka"
        },
        {
          name: "Heritage Resort Hampi",
          address: "Hampi, Karnataka"
        }
      ]
    }
  ];
  
  
  const destinationSelect = document.getElementById("destination");
  
  const addDestinationOptions = ()=>{
    for(let destination of destinations){
      const option = `<option value="${destination.name}">${destination.name}</option>`;
      destinationSelect.insertAdjacentHTML("beforeend", option);
    }
  }
  
  addDestinationOptions();