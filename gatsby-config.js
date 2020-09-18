module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://condescending-wing-37a49e.netlify.app`,
    name: `Andrew Malone`,
    role: `Computer Programmer`,
    cell: `092-614-5203`,
    email: `drewandmalone@gmail.com`,
    socialMedia: [
      {
        name: "github",
        link: "https://github.com/Andrew-Malone/andrew-resume",
      },
      { name: "linkedin", link: "https://linkedin.com" },
      { name: "facebook", link: "https://facebook.com" },
      { name: "instagram", link: "https://instagram.com" },
    ],
    about: `
      <p>He continued his training in the years that followed,
      determined to become a Arabian Knight like his father before him,
      and found a new mentor in Grand Master Yoda. After his master's death,
      Skywalker participated in the Battle of Endor in 4 ABY,
      during which he confronted the Sith Lord Darth Vader,
      whom he learned was in fact his father, Anakin Skywalker.
      With Luke's help, Anakin returned to the light side of the Force by destroying the Emperor at the cost of his own life,
      fulfilling his destiny as the Chosen One. You can find more information <a href="https://starwars.fandom.com/wiki/Luke_Skywalker" target="_blank" rel="noopener noreferrer">here</a>.</p>
      <p>See the PDF version of my resume <a href="#">here</a>.</p>
      <p>As you can see, it's possible to add HTML tags in your about page.</p> 
      `,
    education: [
      {
        degree: "Ph.D.",
        major: "Computer Science",
        when: "2014-2018",
        school: "Harvard University",
        where: "Cambridge, MA",
        moreInfo: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        See my thesis <a href="#">here</a>.</p>`,
      },
      {
        degree: "M.Sc.",
        major: "Software Engineering",
        when: "2012-2014",
        school: "Stanford University",
        where: "Stanford, CA",
        moreInfo: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."`,
      },
      {
        degree: "B.Sc.",
        major: "Computer Engineering",
        when: "2008-2012",
        school: "UCLA",
        where: "Los Angeles, CA",
        moreInfo: `<p>I finally found out how it feels like to live in LA; it was awesome!</p>`,
      },
      {
        degree: "High School Diploma",
        when: "2000-2008",
        school: "Awesome High School",
        where: "Los Angeles, CA",
      },
    ],
    experience: [
      {
        role: "Software Developer",
        when: "2014-Present",
        company: "Facebook",
        where: "Menlo Park, CA",
        moreInfo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      },
      {
        role: "Web Developer",
        when: "2010-2014",
        company: "Amazon",
        where: "Vancouver, BC",
        moreInfo: `See my <a href="#" target="_blank" rel="noopener noreferrer">work</a>.`,
      },
    ],
    skills: [
      {
        name: "JavaScript",
        level: "85",
        experience: "5 years",
      },
      {
        name: "Python",
        level: "75",
        experience: "2 years",
      },
      {
        name: "Java",
        level: "65",
        experience: "2 years",
      },
      {
        name: "React",
        level: "75",
        experience: "1 years",
      },
      {
        name: "Linux",
        level: "75",
        experience: "4 years",
      },
      {
        name: "C++",
        level: "40",
        experience: "1 years",
      },
    ],
    interests: [
      "Reading",
      "Programming",
      "Piano",
      "Table Tennis",
      "Chess",
      "Games"
    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "great-gatsby",
    //fonts. Available: [default, programmer]
    font: "default",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
		`gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Mono`,
          },
        ],
      },
    },
  ],
}
