const assetsPath =
  process.env.REACT_STATIC_ENV === "production" ? "/multiverse-portfolio" : "";

const getImageUrl = (imagePath) => assetsPath + imagePath;

export default {
  title: "Multiverse Portfolio",
  entries: [
    {
      title: "Magna feugiat lorem ipsum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem sequi nobis est vel quasi magni ut nam mollitia fugiat quia iusto architecto cum veniam, quis dicta nemo tenetur inventore.",
      imageUrl: getImageUrl("/images/thumbs/01.jpg"),
      slideshow: [
        {
          original: getImageUrl("/images/fulls/01.jpg"),
          thumbnail: getImageUrl("/images/thumbs/01.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/02.jpg"),
          thumbnail: getImageUrl("/images/thumbs/02.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/03.jpg"),
          thumbnail: getImageUrl("/images/thumbs/03.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/05.jpg"),
          thumbnail: getImageUrl("/images/thumbs/05.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/06.jpg"),
          thumbnail: getImageUrl("/images/thumbs/06.jpg"),
        },
      ],
    },
    {
      title: "Nisl adipiscing",
      description:
        "At asperiores vel porro vero minima, repellendus eum facilis nisi natus suscipit rerum sequi quidem reprehenderit distinctio officia eaque laudantium necessitatibus adipisci eius veritatis! Rerum voluptas quidem earum veniam recusandae.",
      imageUrl: getImageUrl("/images/thumbs/02.jpg"),
      slideshow: [
        {
          original: getImageUrl("/images/fulls/01.jpg"),
          thumbnail: getImageUrl("/images/thumbs/01.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/02.jpg"),
          thumbnail: getImageUrl("/images/thumbs/02.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/03.jpg"),
          thumbnail: getImageUrl("/images/thumbs/03.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/05.jpg"),
          thumbnail: getImageUrl("/images/thumbs/05.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/06.jpg"),
          thumbnail: getImageUrl("/images/thumbs/06.jpg"),
        },
      ],
    },
    {
      title: "Tempus aliquam veroeros",
      description:
        "Laborum quis ratione, voluptates distinctio illo eum sit alias soluta error aperiam iusto ipsam hic asperiores voluptatibus ipsum? Dolor rerum quasi possimus labore velit tenetur mollitia dignissimos libero ad nostrum.",
      imageUrl: getImageUrl("/images/thumbs/03.jpg"),
      slideshow: [
        {
          original: getImageUrl("/images/fulls/01.jpg"),
          thumbnail: getImageUrl("/images/thumbs/01.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/02.jpg"),
          thumbnail: getImageUrl("/images/thumbs/02.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/03.jpg"),
          thumbnail: getImageUrl("/images/thumbs/03.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/05.jpg"),
          thumbnail: getImageUrl("/images/thumbs/05.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/06.jpg"),
          thumbnail: getImageUrl("/images/thumbs/06.jpg"),
        },
      ],
    },
    {
      title: "Aliquam ipsum sed dolore",
      description:
        "Tenetur facere sint magnam mollitia reprehenderit velit, inventore eligendi amet commodi enim corporis. Consequuntur cum aliquid laborum ab reiciendis culpa dolore, esse est expedita placeat numquam voluptatum amet minus magnam.",
      imageUrl: getImageUrl("/images/thumbs/04.jpg"),
      slideshow: [
        {
          original: getImageUrl("/images/fulls/01.jpg"),
          thumbnail: getImageUrl("/images/thumbs/01.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/02.jpg"),
          thumbnail: getImageUrl("/images/thumbs/02.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/03.jpg"),
          thumbnail: getImageUrl("/images/thumbs/03.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/05.jpg"),
          thumbnail: getImageUrl("/images/thumbs/05.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/06.jpg"),
          thumbnail: getImageUrl("/images/thumbs/06.jpg"),
        },
      ],
    },
    {
      title: "Cursis aliquam nisl",
      description:
        "Neque qui, optio tempora non asperiores fuga quibusdam corporis sequi ab praesentium repellat. Nemo non dolores qui beatae commodi pariatur ipsum inventore fugit odio? At eligendi tempora aliquid ipsa quae!",
      imageUrl: getImageUrl("/images/thumbs/05.jpg"),
      slideshow: [
        {
          original: getImageUrl("/images/fulls/01.jpg"),
          thumbnail: getImageUrl("/images/thumbs/01.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/02.jpg"),
          thumbnail: getImageUrl("/images/thumbs/02.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/03.jpg"),
          thumbnail: getImageUrl("/images/thumbs/03.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/05.jpg"),
          thumbnail: getImageUrl("/images/thumbs/05.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/06.jpg"),
          thumbnail: getImageUrl("/images/thumbs/06.jpg"),
        },
      ],
    },
    {
      title: "Sed consequat phasellus",
      description:
        "Neque qui, optio tempora non asperiores fuga quibusdam corporis sequi ab praesentium repellat. Nemo non dolores qui beatae commodi pariatur ipsum inventore fugit odio? At eligendi tempora aliquid ipsa quae!",
      imageUrl: getImageUrl("/images/thumbs/06.jpg"),
      slideshow: [
        {
          original: getImageUrl("/images/fulls/01.jpg"),
          thumbnail: getImageUrl("/images/thumbs/01.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/02.jpg"),
          thumbnail: getImageUrl("/images/thumbs/02.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/03.jpg"),
          thumbnail: getImageUrl("/images/thumbs/03.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/05.jpg"),
          thumbnail: getImageUrl("/images/thumbs/05.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/06.jpg"),
          thumbnail: getImageUrl("/images/thumbs/06.jpg"),
        },
      ],
    },
    {
      title: "Mauris id tellus arcu",
      description:
        "Esse amet, dicta in ipsum enim voluptatem praesentium accusamus alias quaerat at dolore quia impedit quisquam? Voluptas et quos culpa in quibusdam consequuntur eius, aliquid eum sunt ea voluptatibus hic.",
      imageUrl: getImageUrl("/images/thumbs/07.jpg"),
      slideshow: [
        {
          original: getImageUrl("/images/fulls/01.jpg"),
          thumbnail: getImageUrl("/images/thumbs/01.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/02.jpg"),
          thumbnail: getImageUrl("/images/thumbs/02.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/03.jpg"),
          thumbnail: getImageUrl("/images/thumbs/03.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/05.jpg"),
          thumbnail: getImageUrl("/images/thumbs/05.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/06.jpg"),
          thumbnail: getImageUrl("/images/thumbs/06.jpg"),
        },
      ],
    },
    {
      title: "Nunc vehicula id nulla",
      description:
        "Reiciendis ipsam dolorum sunt delectus, nihil natus ut architecto exercitationem incidunt, ratione velit magnam deleniti ullam ea sit est saepe aperiam perspiciatis harum iusto provident magni. Dolor quas beatae ullam.",
      imageUrl: getImageUrl("/images/thumbs/08.jpg"),
      slideshow: [
        {
          original: getImageUrl("/images/fulls/01.jpg"),
          thumbnail: getImageUrl("/images/thumbs/01.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/02.jpg"),
          thumbnail: getImageUrl("/images/thumbs/02.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/03.jpg"),
          thumbnail: getImageUrl("/images/thumbs/03.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/05.jpg"),
          thumbnail: getImageUrl("/images/thumbs/05.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/06.jpg"),
          thumbnail: getImageUrl("/images/thumbs/06.jpg"),
        },
      ],
    },
    {
      title: "Neque et faucibus viverra",
      description:
        "Hic magni maxime natus! Ratione, sunt, a corrupti quod deserunt error nihil eius consequatur sint, sit non! Consectetur rerum ad, odit, dolore, labore repellat eligendi nemo excepturi facilis ipsum optio.",
      imageUrl: getImageUrl("/images/thumbs/09.jpg"),
      slideshow: [
        {
          original: getImageUrl("/images/fulls/01.jpg"),
          thumbnail: getImageUrl("/images/thumbs/01.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/02.jpg"),
          thumbnail: getImageUrl("/images/thumbs/02.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/03.jpg"),
          thumbnail: getImageUrl("/images/thumbs/03.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/05.jpg"),
          thumbnail: getImageUrl("/images/thumbs/05.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/06.jpg"),
          thumbnail: getImageUrl("/images/thumbs/06.jpg"),
        },
      ],
    },
    {
      title: "Mattis ante fermentum",
      description:
        "Reiciendis, doloremque consectetur iure iusto debitis mollitia quidem quae porro numquam provident placeat accusantium deserunt illo enim tempora a sapiente error saepe? Reprehenderit veniam repellendus a, eveniet odit voluptas quo.",
      imageUrl: getImageUrl("/images/thumbs/10.jpg"),
      slideshow: [
        {
          original: getImageUrl("/images/fulls/01.jpg"),
          thumbnail: getImageUrl("/images/thumbs/01.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/02.jpg"),
          thumbnail: getImageUrl("/images/thumbs/02.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/03.jpg"),
          thumbnail: getImageUrl("/images/thumbs/03.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/05.jpg"),
          thumbnail: getImageUrl("/images/thumbs/05.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/06.jpg"),
          thumbnail: getImageUrl("/images/thumbs/06.jpg"),
        },
      ],
    },
    {
      title: "Sed ac elementum arcu",
      description:
        "Esse, doloremque autem! Repellendus commodi quaerat reiciendis, at magnam nam architecto placeat facilis tempora ducimus quo voluptate ullam! Suscipit quasi animi iusto vero quaerat quos rem odit exercitationem laboriosam nesciunt.",
      imageUrl: getImageUrl("/images/thumbs/11.jpg"),
      slideshow: [
        {
          original: getImageUrl("/images/fulls/01.jpg"),
          thumbnail: getImageUrl("/images/thumbs/01.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/02.jpg"),
          thumbnail: getImageUrl("/images/thumbs/02.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/03.jpg"),
          thumbnail: getImageUrl("/images/thumbs/03.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/05.jpg"),
          thumbnail: getImageUrl("/images/thumbs/05.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/06.jpg"),
          thumbnail: getImageUrl("/images/thumbs/06.jpg"),
        },
      ],
    },
    {
      title: "Vehicula id nulla dignissim",
      description:
        "Maiores, rem tempore magni temporibus dignissimos vitae voluptatum doloribus asperiores enim ducimus eligendi hic culpa nisi repudiandae officia nulla odio, nesciunt vel magnam incidunt ut architecto quibusdam alias! Earum, neque?",
      imageUrl: getImageUrl("/images/thumbs/12.jpg"),
      slideshow: [
        {
          original: getImageUrl("/images/fulls/01.jpg"),
          thumbnail: getImageUrl("/images/thumbs/01.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/02.jpg"),
          thumbnail: getImageUrl("/images/thumbs/02.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/03.jpg"),
          thumbnail: getImageUrl("/images/thumbs/03.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/05.jpg"),
          thumbnail: getImageUrl("/images/thumbs/05.jpg"),
        },
        {
          original: getImageUrl("/images/fulls/06.jpg"),
          thumbnail: getImageUrl("/images/thumbs/06.jpg"),
        },
      ],
    },
  ],
};
