import { RoutePaths } from "@App/Common/Settings/RoutePaths";

export class ArtCategory {
    Id!: number;
    Name!: string;
    ProjectItem!: ArtProjectItem[];
    ImgSrc!: string;
    ImgAlt!: string;
    Description!: string;
    Link!: string;
}

export class ArtProjectItem {
    Id!: number;
    CategoryId!: number;
    Name!: string;
    Description!: string;
    Images!: string[];
    Location!: string;
    CategoryName?: string;
    Link?: string;
}
export const ArtProjects: ArtProjectItem[] = [
    {
        Id: 1,
        Name: 'Mondelez',
        Description: `Creating a mural that tells a vibrant, impactful story focused on the company's commitment to health, safety, and the environment. The artwork was  designed to engage and inspire employees, blending the message of responsibility with the vibrant creativity of graffiti ar Every stroke of the mural reflects the company's values, with colors and shapes that symbolize safety, well-being, and environmental care. Th dynamic graffiti style injects energy into the workplace, creating a space where creativity thrives while reinforcing the importance of maintaining a saf and healthy environment for all. This mural not only enhances the atmosphere but also serves as a constant visual reminder of the company’s core principles, sparking joy and  motivation throughout the office.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/mondelez/mondelez1.webp',
            'assets/Images/Projects/mondelez/mondelez2.webp',
            'assets/Images/Projects/mondelez/mondelez3.webp',
            'assets/Images/Projects/mondelez/mondelez4.webp',
            'assets/Images/Projects/mondelez/mondelez5.webp',
            'assets/Images/Projects/mondelez/mondelez6.webp',
            'assets/Images/Projects/mondelez/mondelez7.webp',
            'assets/Images/Projects/mondelez/mondelez8.webp',
            'assets/Images/Projects/mondelez/mondelez9.webp',
            'assets/Images/Projects/mondelez/mondelez10.webp',
            'assets/Images/Projects/mondelez/mondelez11.webp',
            'assets/Images/Projects/mondelez/mondelez12.webp',
            'assets/Images/Projects/mondelez/mondelez13.webp',
        ],
        CategoryId: 1,
        CategoryName: 'Offices and factories'
    },
    {
        Id: 2,
        Name: 'Careem',
        Description: `Creating inspiring graffiti art designed to motivate growth and drive creativity. Using the brand's colors, we infused energy and vibrancy into the space reflecting the dynamic spirit of Careem. Our artwork serves as a constant reminder of the company’s mission and values, transforming the off environment into a place of inspiration and collaboration. Through thoughtful design and personalized elements, we brought the brand's identity to life,  enhancing the workspace with visuals that inspire and empower.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/CAREEM/careem1.webp',
            'assets/Images/Projects/CAREEM/careem2.webp',
            'assets/Images/Projects/CAREEM/careem3.webp',
        ],
        CategoryId: 1,
        CategoryName: 'Offices and factories'
    },
    {
        Id: 3,
        Name: 'Money Fellows',
        Description: `Creating graffiti artwork for the walls of Money Fellows’ head office in Cairo transformed the space, elevating its energy and keeping the posit vibes flowing. The vibrant designs not only enhanced the office's atmosphere but also aligned with the company’s dynamic culture, adding a uni touch that motivates and inspires the team. Through this creative expression, we brought a new level of vibrancy to the workspace, creating an  environment that reflects both the brand's energy and its commitment to innovation.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/Money-fellows/moneyfellow.webp',
            // 'assets/Images/Projects/Money-fellows/moneyfellow1.webp',
            // 'assets/Images/Projects/Money-fellows/moneyfellow2.webp',
            // 'assets/Images/Projects/Money-fellows/moneyfellow3.webp',
            // 'assets/Images/Projects/Money-fellows/moneyfellow4.webp',
            // 'assets/Images/Projects/Money-fellows/moneyfellow5.webp',
            'assets/Images/Projects/Money-fellows/moneyfellow6.webp',
            'assets/Images/Projects/Money-fellows/moneyfellow7.jpg',
            // 'assets/Images/Projects/Money-fellows/moneyfellow8.jpg',
            'assets/Images/Projects/Money-fellows/moneyfellow9.webp',

        ],
        CategoryId: 1,
        CategoryName: 'Offices and factories'
    },
    {
        Id: 4,
        Name: 'Virtual Quest',
        Description: 'For Virtual Quest, a game development office, we brought an artistic touch to 10 walls, carefully designed to match the company’s unique identity Each mural reflects the creative energy of the gaming world, adding personality and character to the space. The vibrant designs help create an inspirin atmosphere that aligns with the innovative spirit of Virtual Quest, making the office not just a place to work, but a place to imagine, create, and grow.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/vq/vq1.webp',
            'assets/Images/Projects/vq/vq2.webp',
            'assets/Images/Projects/vq/vq3.webp',
            'assets/Images/Projects/vq/vq4.webp',
            'assets/Images/Projects/vq/vq5.webp',
            'assets/Images/Projects/vq/vq6.webp',
        ],
        CategoryId: 1,
        CategoryName: 'Offices and factories'
    },
    {
        Id: 5,
        Name: 'GTE Travel Solutions Company',
        Description: 'For GTE, a travel solutions company, we created unique artwork to enhance the office environment and maintain a positive, motivating atmosphere. I addition to custom graffiti art, we incorporated acrylic paintings and bespoke wallpaper designs, all reflecting the brand’s dynamic spirit.  combination of vibrant visuals and quality materials helps inspire creativity and energy, transforming the workspace into a lively, welcoming place that  reflects the company’s dedication to innovation and excellent service.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/GTE-OFFICE/gte1.webp',
            'assets/Images/Projects/GTE-OFFICE/gte7.webp',
        ],
        CategoryId: 1,
        CategoryName: 'Offices and factories'
    },
    {
        Id: 6,
        Name: 'Orange',
        Description: 'For Orange, we transformed an entire 11-floor building with custom artwork, turning every level into a visual masterpiece. Each floor features uni designs that align with the company’s brand identity, creating an immersive and inspiring environment throughout the building. The artwork not only enhances the aesthetic of the space but also fosters a sense of creativity and positivity, making it a dynamic and engaging workplace for employees and visitors alike.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/orange/orange1.webp',
            'assets/Images/Projects/orange/orange2.webp',
            'assets/Images/Projects/orange/orange3.webp',
            'assets/Images/Projects/orange/orange4.webp',
            'assets/Images/Projects/orange/orange5.webp',
            'assets/Images/Projects/orange/orange6.webp',
            'assets/Images/Projects/orange/orange7.webp',
            'assets/Images/Projects/orange/orange8.webp',
        ],
        CategoryId: 1,
        CategoryName: 'Offices and factories'
    },
    {
        Id: 8,
        Name: 'La Maison Co-Working Space',
        Description: 'For La Maison, a co-working space, we created an immersive environment with a unique blend of graffiti artwork, wallpaper, door stickers, acryli quotes, and classic frames. The artwork fuses the charm of Parisian streets with the nostalgic essence of old Cairo, creating a dynamic and inspiring  space. This mix of modern street art and vintage elements not only reflects the brand\'s international and local influences but also fosters a creat atmosphere, making it an ideal setting for collaboration and innovation.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/LaMaison/lamaison1.webp',
            'assets/Images/Projects/LaMaison/lamaison2.webp',
            'assets/Images/Projects/LaMaison/lamaison3.webp',
            'assets/Images/Projects/LaMaison/lamaison4.webp',
            'assets/Images/Projects/LaMaison/lamaison5.webp',
            'assets/Images/Projects/LaMaison/lamaison6.webp',
        ],
        CategoryId: 1,
        CategoryName: 'Offices and factories'
    },

    {
        Id: 9,
        Name: 'Bonita',
        Description: `For Bonita, one of the top Mexican cuisines in Egypt, we created vibrant artwork paired with neon lights to transport customers straight to the heart of  Mexico. The colorful murals and lively lighting evoke the essence of Mexican culture, immersing guests in an authentic atmosphere as soon as they  step through the door. Our design aims to capture the warmth and energy of Mexico, turning the restaurant into a true cultural experience that enhances  the dining experience with every visit.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/BONITA/bonita1.webp',
            'assets/Images/Projects/BONITA/bonita2.webp',
            'assets/Images/Projects/BONITA/bonita3.webp',
            'assets/Images/Projects/BONITA/bonita4.webp',
        ],
        CategoryId: 2,
        CategoryName: 'Restaurants'
    },
    {
        Id: 10,
        Name: 'Taiyaki',
        Description: `For Taiyaki, we brought the streets of Japan to life through murals that highlight the rich culture and vibrant atmosphere of the country. The artwork  immerses customers in the heart of Japan, showcasing traditional elements, street scenes, and iconic imagery. Our murals create an authentic ambiance,  allowing guests to experience the essence of Japanese culture while enjoying their favorite treats, turning Taiyaki into more than just a place to eat, but  a journey into Japan itself.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/taiyaki/taiyaki1.webp',
            'assets/Images/Projects/taiyaki/taiyaki2.webp',
            'assets/Images/Projects/taiyaki/taiyaki3.webp',
            'assets/Images/Projects/taiyaki/taiyaki4.webp',
            'assets/Images/Projects/taiyaki/taiyaki5.webp',
            'assets/Images/Projects/taiyaki/taiyaki6.webp',
            'assets/Images/Projects/taiyaki/taiyaki7.webp',
            'assets/Images/Projects/taiyaki/taiyaki8.webp',
            'assets/Images/Projects/taiyaki/taiyaki9.webp',
            'assets/Images/Projects/taiyaki/taiyaki10.webp',
            'assets/Images/Projects/taiyaki/taiyaki11.webp',
            'assets/Images/Projects/taiyaki/taiyaki12.webp',
        ],
        CategoryId: 2,
        CategoryName: 'Restaurants'
    },
    {
        Id: 11,
        Name: 'Butcher\'s Burger',
        Description: `For Butcher's Burger, with 11 branches across the area, we created a unique identity through street-inspired artwork that complements the modern  interior of each location. The custom murals bring an urban edge to the space, adding personality and character while aligning with the brand's  contemporary vibe. Our designs help transform the walls into an extension of the Butcher's Burger experience, creating an atmosphere that resonates  with customers and adds to the overall dining experience.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/BUTCHER-BURGER/burcher1.webp',
            'assets/Images/Projects/BUTCHER-BURGER/burcher2.webp',
            'assets/Images/Projects/BUTCHER-BURGER/burcher3.webp',
            'assets/Images/Projects/BUTCHER-BURGER/burcher4.webp',
            'assets/Images/Projects/BUTCHER-BURGER/burcher5.webp',
            'assets/Images/Projects/BUTCHER-BURGER/burcher6.webp',
            'assets/Images/Projects/BUTCHER-BURGER/burcher7.webp',
            'assets/Images/Projects/BUTCHER-BURGER/burcher8.webp',
            'assets/Images/Projects/BUTCHER-BURGER/burcher9.webp',
            'assets/Images/Projects/BUTCHER-BURGER/burcher10.webp',
            'assets/Images/Projects/BUTCHER-BURGER/burcher11.webp',
            'assets/Images/Projects/BUTCHER-BURGER/burcher12.webp',
        ],
        CategoryId: 2,
        CategoryName: 'Restaurants'
    },
    {
        Id: 12,
        Name: 'Kansas',
        Description: `For Kansas, a quick-service fried chicken brand, we gave the interior a fresh, urban look with bold hip-hop street graffiti. The vibrant artwork refle the brand’s energetic and youthful vibe, turning the space into an exciting and dynamic environment. Our graffiti designs inject a sense of street cultur into the restaurant, making it more than just a place to enjoy great food—it’s a place where art, music, and flavor come together, creating a uniqu experience for every customer.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/kansas/kansas1.webp',
            'assets/Images/Projects/kansas/kansas2.webp',
            'assets/Images/Projects/kansas/kansas3.webp',
            'assets/Images/Projects/kansas/kansas4.webp',
            'assets/Images/Projects/kansas/kansas5.webp',
            'assets/Images/Projects/kansas/kansas6.webp',
            'assets/Images/Projects/kansas/kansas7.webp',
            'assets/Images/Projects/kansas/kansas8.webp',
            'assets/Images/Projects/kansas/kansas9.webp',
            'assets/Images/Projects/kansas/kansas10.webp',
        ],
        CategoryId: 2,
        CategoryName: 'Restaurants'
    },
    {
        Id: 13,
        Name: 'Mori Sushi',
        Description: `For Mori Sushi, we crafted intricate Japanese murals that capture the essence of Japanese culture. The artwork immerses guests in the vibrant traditions  of Japan, bringing elements of nature, history, and art to life on the walls. With a focus on authenticity and attention to detail, the murals transform the  space, creating an inviting atmosphere where diners can experience the beauty and artistry of Japan while enjoying their meal.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/MORI-SUSHI/MORI-SUSHI-1.webp',
            'assets/Images/Projects/MORI-SUSHI/MORI-SUSHI-2.webp',
            'assets/Images/Projects/MORI-SUSHI/MORI-SUSHI-3.webp',
            'assets/Images/Projects/MORI-SUSHI/MORI-SUSHI-4.webp',
            'assets/Images/Projects/MORI-SUSHI/MORI-SUSHI-5.webp',
            'assets/Images/Projects/MORI-SUSHI/MORI-SUSHI-6.webp',
            'assets/Images/Projects/MORI-SUSHI/MORI-SUSHI-7.webp',
            'assets/Images/Projects/MORI-SUSHI/MORI-SUSHI-8.webp',
        ],
        CategoryId: 2,
        CategoryName: 'Restaurants'
    },
    {
        Id: 14,
        Name: 'JJ’S',
        Description: `Our mural at Let’s JJ’S in The Hub Marassi a vibrant celebration of summer. Inspired by the season's energy, this design bursts with lively colors, bold  patterns, and playful elements that capture the essence of sunny days by the beach. From the glowing hues of sunrise to the refreshing blues of the sea, the artwork creates an immersive, uplifting atmosphere that invites everyone to feel  the warmth and joy of summer. This mural isn’t just a backdrop—it’s a vibe, a mood, and a statement, perfectly complementing the dynamic energy of JJ’S. Whether you're grabbing a  drink, snapping a photo, or soaking in the ambiance, this design adds a splash of happiness to your summer experience.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/jj/jj1.jpg',
            'assets/Images/Projects/jj/jj2.jpg',
            'assets/Images/Projects/jj/jj3.jpg',
            'assets/Images/Projects/jj/jj4.jpg',
            'assets/Images/Projects/jj/jj5.jpg',
            'assets/Images/Projects/jj/jj6.jpg',
        ],
        CategoryId: 2,
        CategoryName: 'Restaurants'
    },
    {
        Id: 15,
        Name: 'Samiha',
        Description: `Our mural at Samiha Restaurant redefined the atmosphere, turning the space into a visual masterpiece that resonates with warmth and personality Drawing inspiration from Samiha’s unique identity, the design combines rich colors, intricate details, and cultural influences to create a captivatin ambiance. The mural serves as the centerpiece of the restaurant, enhancing the dining experience by immersing guests in an artistic journey. Every brushstroke  was crafted to uplift the space, bringing energy, charm, and a touch of storytelling to the surroundings. More than just decoration, this artwork transforms Samiha Restaurant into a destination—a place where vibrant visuals meet exceptional dining.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/samiha/samiha1.webp',
            'assets/Images/Projects/samiha/samiha2.webp',
            'assets/Images/Projects/samiha/samiha3.webp',
        ],
        CategoryId: 2,
        CategoryName: 'Restaurants'
    },

    {
        Id: 16,
        Name: 'Rubix Park',
        Description: `At Rubix Park Mall in City Center, we brought art to life in a fun and engaging way by incorporating interactive elements. Using the concept of  interactive art, we designed pieces that invite spectators to become a part of the experience. One highlight of this project is the Rubik's Cube-inspired  bench, where the artwork doubles as a functional piece of furniture. This creative fusion of art and utility not only enhances the mall’s atmosphere but  also encourages visitors to engage with the space in a playful and memorable way.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/rubix-park/rubix1.webp',
            'assets/Images/Projects/rubix-park/rubix2.webp',
            'assets/Images/Projects/rubix-park/rubix3.webp',
            'assets/Images/Projects/rubix-park/rubix4.webp',
            'assets/Images/Projects/rubix-park/rubix5.webp',
            'assets/Images/Projects/rubix-park/rubix6.webp',
            'assets/Images/Projects/rubix-park/rubix7.webp',
        ],
        CategoryId: 3,
        CategoryName: 'Malls'
    },
    {
        Id: 17,
        Name: 'Tio Complex',
        Description: `For Tio Complex, we created lively and vibrant artwork that injects energy into every corner of the space. The colorful murals reflect the dynamic spiritof the complex, enhancing the environment and creating an atmosphere that’s both inspiring and welcoming. Our designs transform the space into a visual experience, making Tio Complex a place where creativity and vibrancy meet, energizing visitors and creating a lasting impression.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/Tio-Complex/TIO-1.webp',
            'assets/Images/Projects/Tio-Complex/TIO-2.webp',
            'assets/Images/Projects/Tio-Complex/TIO-3.webp',
            'assets/Images/Projects/Tio-Complex/TIO-4.webp',
            'assets/Images/Projects/Tio-Complex/TIO-5.webp',
            'assets/Images/Projects/Tio-Complex/TIO-6.webp',
            'assets/Images/Projects/Tio-Complex/TIO-7.webp',
            'assets/Images/Projects/Tio-Complex/TIO-8.webp',
            'assets/Images/Projects/Tio-Complex/TIO-9.webp',
            'assets/Images/Projects/Tio-Complex/TIO-10.webp',
            'assets/Images/Projects/Tio-Complex/TIO-11.webp',
            'assets/Images/Projects/Tio-Complex/TIO-12.webp',
            'assets/Images/Projects/Tio-Complex/TIO-13.webp',
            'assets/Images/Projects/Tio-Complex/TIO-14.webp',
            'assets/Images/Projects/Tio-Complex/TIO-15.webp',
        ],
        CategoryId: 3,
        CategoryName: 'Malls'
    },

    {
        Id: 18,
        Name: 'ProGuys',
        Description: `For Pro Guys, one of Egypt’s top wrapping and car styling companies, we created murals that showcase their identity and the artistry behind their  work. Each piece highlights the precision and skill that defines Pro Guys’ services, with a final statement wall dedicated to their dream team. This mural not only celebrates their craftsmanship but also reinforces the company’s commitment to excellence, turning their workspace into a visual  representation of their passion and expertise in car styling.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/Pro-guys/pro1.webp',
            'assets/Images/Projects/Pro-guys/pro2.webp',
            'assets/Images/Projects/Pro-guys/pro3.webp',
            'assets/Images/Projects/Pro-guys/pro4.webp',
            'assets/Images/Projects/Pro-guys/pro5.webp',
            'assets/Images/Projects/Pro-guys/pro6.webp',
            'assets/Images/Projects/Pro-guys/pro7.webp',
            'assets/Images/Projects/Pro-guys/pro8.webp',
        ],
        CategoryId: 4,
        CategoryName: 'Showrooms'
    },
    {
        Id: 19,
        Name: 'Seats',
        Description: `For Seats, we added a splash of color to the walls with vibrant tropical and relatable artwork. The murals bring warmth and energy to the space,  creating a lively atmosphere that resonates with the brand’s playful and inviting vibe. By incorporating tropical elements, the artwork brings a  refreshing and uplifting feel, making Seats a place where customers can relax and enjoy their time in a visually stimulating environment.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/Seats/seats1.webp',
            'assets/Images/Projects/Seats/seats2.webp',
            'assets/Images/Projects/Seats/seats3.webp',
            'assets/Images/Projects/Seats/seats4.webp',
            'assets/Images/Projects/Seats/seats5.webp',
            'assets/Images/Projects/Seats/seats6.webp',
            'assets/Images/Projects/Seats/seats7.webp',
            'assets/Images/Projects/Seats/seats8.webp',
            'assets/Images/Projects/Seats/seats9.webp',
        ],
        CategoryId: 4,
        CategoryName: 'Showrooms'
    },
    {
        Id: 20,
        Name: 'Adidas Mall Of Egypt',
        Description: `For the Adidas store in Mall of Egypt, we created a design that reflects the powerful fusion of athletic performance and Egyptian culture. Drawing inspiration from the iconic Adidas Ultraboost sneakers, the design captures the essence of modern streetwear, while seamlessly blending elements of  Egyptian heritage and urban life. The mural represents the dynamic energy of both the global Adidas brand and the rich history of Egypt’s streets, showcasing the timeless connection  between fashion, sport, and culture. The energetic vibe of the design speaks to the spirit of movement, both through the physical act of sport and  through the cultural flow of Egypt’s vibrant urban landscap This project embodies the unity between global athleticism and local culture, creating an engaging visual experience that resonates with both Adidas  fans and those who appreciate Egypt’s unique artistic and street culture.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/Adidas_MOEG/Adidas_MOEG1.webp',
            'assets/Images/Projects/Adidas_MOEG/Adidas_MOEG2.webp',
            'assets/Images/Projects/Adidas_MOEG/Adidas_MOEG3.webp',
        ],
        CategoryId: 4,
        CategoryName: 'Showrooms'
    },
    {
        Id: 21,
        Name: 'Adidas Mall Of Tunisia',
        Description: `Creating a design that reflects the powerful fusion of athletic performance and Tunisian culture. Drawing inspiration from the iconic Adidas superstarsneakers, the design captures the essence of modern streetwear, while seamlessly blending elements of Tunisia heritage and urban life.The mural represents the dynamic energy of both the global Adidas brand and the rich history of Tunisian streets, showcasing the timeless connection between fashion, sport, and culture. The energetic vibe of the design speaks to the spirit of movement, both through the physical act of sport and through the cultural flow of Tunisian vibrant urban landscapThis project embodies the unity between global athleticism and local culture, creating an engaging visual experience that resonates with both Adidas fans and those who appreciate Tunisia unique artistic and street culture.`,
        Location: 'Tunisia',
        Images: [
            'assets/Images/Projects/Adidas_Tunisia/Adidas_Tunisia.webp',
        ],
        CategoryId: 4,
        CategoryName: 'Showrooms'
    },

    {
        Id: 22,
        Name: 'Opel',
        Description: `We are proud to be part of the #LessNormal campaign by Opel Egypt, bringing creativity and innovation to the forefront. Our team at Diwan Studios crafted a striking 3D illusion design, blending precision with artistic vision to create an eye-catching visual experience. This project was a thrilling collaboration, and every detail was executed with efficiency and passion. Working alongside an incredible crew made the process even more exciting, reinforcing our commitment to pushing artistic boundaries and redefining urban spaces.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/Opel/opel1.webp',
            'assets/Images/Projects/Opel/opel2.webp',
            'assets/Images/Projects/Opel/opel3.webp',
        ],
        CategoryId: 5,
        CategoryName: 'Activation'
    },
    {
        Id: 23,
        Name: 'Yango Play',
        Description: `We’re thrilled to unveil our collaboration with visiongroup for the Fakret Al Saher teaser campaign on yangoplay! This vibrant graffiti spans an impressive 100 m², turning District 5 into a dynamic canvas of creativity and color. Featuring the incredible talents of Taha Desouky, Asmaa galal, and Aly Kassem, this mural captures the essence of the campaign, blending bold visuals  and artistic energy to create an unforgettable experience. Every detail in this artwork tells a story, showcasing the perfect harmony between urban art and modern storytelling. Watch the magic come alive in District 5!`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/Yango-Play/yangoplay1.webp',
            'assets/Images/Projects/Yango-Play/yangoplay2.webp',
            'assets/Images/Projects/Yango-Play/yangoplay3.webp',
            'assets/Images/Projects/Yango-Play/yangoplay4.webp',
        ],
        CategoryId: 5,
        CategoryName: 'Activation'
    },
    {
        Id: 24,
        Name: 'Oppo',
        Description: `For the F7 Youth Launch event by Oppo Egypt, Diwan Studios brought the energy with vibrant graffiti art, turning the space into a dynamic interactive experience. Our artwork added a bold and youthful vibe, perfectly aligning with OPPO’s innovative spirit and the excitement of the launch. Creativity met celebration, making this event an unforgettable fusion of art, technology, and youth culture!`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/Oppo/oppo1.webp',
            'assets/Images/Projects/Oppo/oppo2.webp',
        ],
        CategoryId: 5,
        CategoryName: 'Activation'
    },

    {
        Id: 25,
        Name: 'Striker’s Bowling Center',
        Description: `For Strikers Bowling Center, we had the opportunity to completely transform the interior of the space, spanning approximately 700 m², with our  dynamic and bold artwork. Our goal was to create an engaging and energetic environment that enhanced the excitement of the bowling experience. The artwork integrated a mix of normal and fluorescent paints, bringing the space to life with vibrant colors that pop under different lighting conditions. In addition to the murals, we designed and implemented a variety of visual elements including floor graphics, neon signage, posters, frames, and wallpaper. These details worked together to create a cohesive, immersive atmosphere that envelops guests from the moment they enter. This project not only transformed the visual appeal of the center but also contributed to an energized environment, making Strikers Bowling Center a  standout location for entertainment and fun.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/strikers/strikers1.webp',
            'assets/Images/Projects/strikers/strikers2.webp',
            'assets/Images/Projects/strikers/strikers3.webp',
            'assets/Images/Projects/strikers/strikers4.webp',
            'assets/Images/Projects/strikers/strikers5.webp',
            'assets/Images/Projects/strikers/strikers6.webp',
            'assets/Images/Projects/strikers/strikers7.webp',
            'assets/Images/Projects/strikers/strikers8.webp',
            'assets/Images/Projects/strikers/strikers9.webp',
            'assets/Images/Projects/strikers/strikers10.webp',
            'assets/Images/Projects/strikers/strikers11.webp',
            'assets/Images/Projects/strikers/strikers12.webp',
            'assets/Images/Projects/strikers/strikers13.webp',
            'assets/Images/Projects/strikers/strikers14.webp',
            'assets/Images/Projects/strikers/strikers15.webp',
            'assets/Images/Projects/strikers/strikers16.webp',
            'assets/Images/Projects/strikers/strikers17.webp',
            'assets/Images/Projects/strikers/strikers18.webp',
            'assets/Images/Projects/strikers/strikers19.webp',
            'assets/Images/Projects/strikers/strikers20.webp',
            'assets/Images/Projects/strikers/strikers21.webp',
            'assets/Images/Projects/strikers/strikers22.webp',
            'assets/Images/Projects/strikers/strikers23.webp',
            'assets/Images/Projects/strikers/strikers24.webp',
            'assets/Images/Projects/strikers/strikers25.webp',
        ],
        CategoryId: 6,
        CategoryName: 'Entertainment'
    },
    {
        Id: 26,
        Name: 'Lane9',
        Description: `We brought Lane 9 Entertainment Hub to life with a striking fluorescent mural artwork that glows in the dark, transforming the space into an electrifying visual experience. This design pushes the boundaries of creativity, combining bold graffiti elements with vibrant fluorescent colors to create an immersive atmosph that comes alive under the glow. The mural adds energy, movement, and a unique vibe to Lane 9, perfectly aligning with its dynamic and fun-filled ambiance. Where art meets entertainment, day and night!`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/lane9/lane1.webp',
            'assets/Images/Projects/lane9/lane2.webp',
            'assets/Images/Projects/lane9/lane3.webp',
            'assets/Images/Projects/lane9/lane4.webp',
            'assets/Images/Projects/lane9/lane5.webp',
            'assets/Images/Projects/lane9/lane5.webp',
            'assets/Images/Projects/lane9/lane6.webp',
            'assets/Images/Projects/lane9/lane7.webp',
            'assets/Images/Projects/lane9/lane8.webp',
            'assets/Images/Projects/lane9/lane9.webp',
            'assets/Images/Projects/lane9/lane10.webp',
            'assets/Images/Projects/lane9/lane11.webp',
            'assets/Images/Projects/lane9/lane12.webp',
        ],
        CategoryId: 6,
        CategoryName: 'Entertainment'
    },


    {
        Id: 27,
        Name: 'Striker’s Bowling Center',
        Description: `We had the pleasure of transforming the interior of Strikers Bowling Center into a dynamic, high-energy space. Our design approach blended boldness  with creativity to create a memorable experience for visitors. Our contributions included: Neon Work: Eye-catching neon installations that added a vibrant and playful atmosphere, perfectly complementing the lively energy of the bowling  center. Frames Work: Carefully curated and framed artwork that resonated with the center's fun and energetic vibe, adding a personalized touch to various  areas of the venue. Printed Posters: High-quality, visually striking posters that helped reinforce the brand identity and energized the space, ensuring a visually cohesive  and engaging environment. Mega Signage: Large-scale signage that made a bold statement, ensuring easy navigation while elevating the overall aesthetic of the center. The combination of these elements contributed to a fresh, inviting, and exciting environment that perfectly matched the essence of Strikers Bowling  Center, ensuring both functionality and style were seamlessly integrated.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/strikers_/strikers1.webp',
            'assets/Images/Projects/strikers_/strikers2.webp',
            'assets/Images/Projects/strikers_/strikers3.webp',
            'assets/Images/Projects/strikers_/strikers4.webp',
            'assets/Images/Projects/strikers_/strikers5.webp',
            'assets/Images/Projects/strikers_/strikers6.webp',
            'assets/Images/Projects/strikers_/strikers7.webp',
            'assets/Images/Projects/strikers_/strikers8.webp',
            'assets/Images/Projects/strikers_/strikers9.webp',
            'assets/Images/Projects/strikers_/strikers10.webp',
            'assets/Images/Projects/strikers_/strikers11.webp',
            'assets/Images/Projects/strikers_/strikers12.webp',

        ],
        CategoryId: 7,
        CategoryName: 'Production'
    },
    {
        Id: 28,
        Name: 'GTE Travel Solutions Company',
        Description: `We had the privilege of transforming the interior of GTE Traveling Solution Company, creating an atmosphere that reflects the company’s dynamic spirit and commitment to global travel. Our design solutions included: Paintings: Custom artwork that captured the essence of travel and adventure, infusing the space with inspiration and a sense of wanderlust. Acrylic Work: Modern acrylic installations that added depth and sophistication, enhancing the visual appeal and overall ambiance of the office. Wallpaper: Thoughtfully designed wallpaper that complemented the theme of exploration, bringing energy and creativity to various areas while  maintaining a professional and welcoming atmosphere. Our goal was to create a space that inspires both employees and clients, with a design that reflects the passion and excitement of the travel industry.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/GTE-OFFICE_/gte2.webp',
            // 'assets/Images/Projects/GTE-OFFICE_/gte3.webp',
            'assets/Images/Projects/GTE-OFFICE_/gte4.webp',
            'assets/Images/Projects/GTE-OFFICE_/gte5.webp',
            'assets/Images/Projects/GTE-OFFICE_/gte6.webp',
            'assets/Images/Projects/GTE-OFFICE_/gte8.webp',
        ],
        CategoryId: 7,
        CategoryName: 'Production'
    },
    {
        Id: 29,
        Name: 'La Maison Co-Working Space',
        Description: `We had the exciting opportunity to transform the interior of La Maison Co-Working Space, blending creativity with functionality. Our contributions  \nincluded:\n Wall Paper: Custom-designed wallpaper that added a modern touch to the space, creating a vibrant and welcoming environment for productivity and  collaboration. Frames Work: Carefully selected and framed artwork that complemented the space’s aesthetic, bringing personality and visual appeal to key areas. Acrylic Work: Sleek, contemporary acrylic installations that added a sophisticated and professional flair, enhancing both visual and spatial dynamics. Door Stickers: Unique door decals that provided clear, functional navigation while enhancing the overall design, adding a seamless flow throughout thw workspace. Our design approach for La Maison reflects our commitment to creating spaces that inspire and energize, with attention to detail in every element to ensure a harmonious atmosphere.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/laMaison_/lamaison1.webp',
            'assets/Images/Projects/laMaison_/lamaison2.webp',
            'assets/Images/Projects/laMaison_/lamaison3.webp',
            'assets/Images/Projects/laMaison_/lamaison4.webp',
        ],
        CategoryId: 7,
        CategoryName: 'Production'
    },
    {
        Id: 30,
        Name: 'Mylo',
        Description: `We had the opportunity to transform mylo Office into an inspiring and functional workspace. Our design solutions combined creativity and innovation to create a modern and engaging environment. Our contributions included: Paintings: Custom-designed artworks that added character and energy to the space, aligning with Mylo’s brand identity and fostering a productive  atmosphere. Acrylic Work: Sleek acrylic installations that brought a contemporary edge to the office, enhancing both visual appeal and the overall flow of the space. Wallpaper: Custom wallpaper designs that complemented the office's aesthetic, creating a cohesive and vibrant environment that encouraged creativity and collaboration. Stickers: Unique and functional wall stickers that helped define different zones within the office while adding visual interest to key areas. Frames: Carefully selected and framed art that highlighted Mylo’s brand message, adding style and sophistication to the office environment. Each element was thoughtfully integrated to elevate the overall office experience, creating a space that reflects Mylo’s innovative and dynamic approach to work.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/mylo_/mylo1.webp',
            'assets/Images/Projects/mylo_/mylo2.webp',
            'assets/Images/Projects/mylo_/mylo3.webp',
            'assets/Images/Projects/mylo_/mylo4.webp',
            'assets/Images/Projects/mylo_/mylo5.webp',
            'assets/Images/Projects/mylo_/mylo6.webp',
            'assets/Images/Projects/mylo_/mylo7.webp',
            'assets/Images/Projects/mylo_/mylo8.webp',
            'assets/Images/Projects/mylo_/mylo9.webp',
            'assets/Images/Projects/mylo_/mylo10.webp',
            'assets/Images/Projects/mylo_/mylo11.webp',
        ],
        CategoryId: 7,
        CategoryName: 'Production'
    },
    {
        Id: 31,
        Name: 'Seashell Villa',
        Description: `At Seashell Villa, we redefined the interior with a fusion of art and elegance. Our team at Diwan Studios enhanced the space through handcrafted acrylic paintings, adding depth and character to every corner. Complementing the artwork, a sleek metal handrail was integrated, bringing a modern  and sophisticated touch to the villa’s aesthetic. This project reflects our commitment to creating harmonious and visually striking spaces, where every detail tells a story of creativity and craftsmanship.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/seashell/seashell1.webp',
            'assets/Images/Projects/seashell/seashell2.webp',
            'assets/Images/Projects/seashell/seashell3.webp',
            'assets/Images/Projects/seashell/seashell4.webp',
            'assets/Images/Projects/seashell/seashell5.webp',
            'assets/Images/Projects/seashell/seashell6.webp',
            'assets/Images/Projects/seashell/seashell7.webp',

        ],
        CategoryId: 7,
        CategoryName: 'Production'
    }
];
const regex = /['\s]/g;
ArtProjects.forEach(project => {
    project.Link = `${RoutePaths.ArtWorks}/${project.CategoryName?.replace('&', 'and').replace(regex, '').toLowerCase().trim()}/${project.Name.replace(regex, '').toLowerCase().trim()}`;
});


export const ArtCategories: ArtCategory[] = [
    // { Name: 'Commercial', ProjectItem: ArtProjects.filter(p => p.CategoryName == 'Commercial') },
    {
        Id: 1,
        Name: 'Offices and factories',
        ProjectItem: ArtProjects.filter(p => p.CategoryName == 'Offices and factories'),
        ImgSrc: 'assets/Images/Diwan-categories/category-1.webp',
        ImgAlt: '',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
        Link: 'officesandfactories',
    },
    {
        Id: 2,
        Name: 'Restaurants',
        ProjectItem: ArtProjects.filter(p => p.CategoryName == 'Restaurants'),
        ImgSrc: 'assets/Images/Diwan-categories/category-2.webp',
        ImgAlt: '',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
        Link: 'restaurants',
    },
    {
        Id: 3,
        Name: 'Malls',
        ProjectItem: ArtProjects.filter(p => p.CategoryName == 'Malls'),
        ImgSrc: 'assets/Images/Diwan-categories/category-3.webp',
        ImgAlt: '',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
        Link: 'malls',
    },
    {
        Id: 4,
        Name: 'Showrooms',
        ProjectItem: ArtProjects.filter(p => p.CategoryName == 'Showrooms'),
        ImgSrc: 'assets/Images/Diwan-categories/category-4.webp',
        ImgAlt: '',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
        Link: 'showrooms',
    },
    {
        Id: 5,
        Name: 'Activation',
        ProjectItem: ArtProjects.filter(p => p.CategoryName == 'Activation'),
        ImgSrc: 'assets/Images/Diwan-categories/category-5.webp',
        ImgAlt: '',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
        Link: 'activation',
    },
    {
        Id: 6,
        Name: 'Entertainment',
        ProjectItem: ArtProjects.filter(p => p.CategoryName == 'Entertainment'),
        ImgSrc: 'assets/Images/Diwan-categories/category-6.webp',
        ImgAlt: '',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
        Link: 'entertainment',
    },
    {
        Id: 7,
        Name: 'Production',
        ProjectItem: ArtProjects.filter(p => p.CategoryName == 'Production'),
        ImgSrc: 'assets/Images/Diwan-categories/category-7.webp',
        ImgAlt: '',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
        Link: 'production',
    },
    {
        Id: 8,
        Name: 'World wide',
        ProjectItem: ArtProjects.filter(p => p.CategoryName == 'worldwide'),
        ImgSrc: 'assets/Images/Diwan-categories/category-8.webp',
        ImgAlt: '',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
        Link: 'worldwide',
    },
];


export const MoreArtProjects: ArtProjectItem[] = [
    {
        Id: 1,
        Name: 'Fifa world Cup 2022',
        Description: `In collaboration with the Supreme Committee, we proudly unveiled stunning wall murals at Al Thumama and Al Janub Stadiums in Qatar for the FIFA  World Cup 2022. These dynamic artworks celebrate the energy and excitement of the world’s most iconic sporting event, transforming the stadiums  into vibrant, immersive spaces. \nPermanent Legacy: \n Two murals remain as permanent fixtures at the stadiums, symbolizing the timeless bond between art and sport \nMemorable Tributes: \n Three murals serve as a legacy, preserving the unforgettable spirit of the World Cup for generations to come. Featuring bold colors, intricate designs, and contemporary graffiti techniques, these murals narrate stories of unity, passion, and the universal joy o football.  Each artwork connects fans from across the globe, making their experience unforgettable. Set in Qatar, the murals not only enhance the stadium atmosphere but also turn these public spaces into creative landmarks, celebrating the global  nature of the World Cup. Art that brings the world together through football and creativity.`,
        Location: 'EGYPT',
        Images: [
            'assets/Images/More-Projects/fifa.webp',
        ],
        Link: 'artworks/fifa',
        CategoryId: 8,
    },
    {
        Id: 2,
        Name: 'Education Above All',
        Description: `In collaboration with the UN Organization, we created a powerful mural embodying the core mission of Education Above All, a global initiative  dedicated to making education accessible to everyone, especially those from marginalized communities facing poverty and hardship. \nHope and Opportunity:\n The mural symbolizes a journey towards a brighter future, highlighting the transformative power of education as a tool for breaking the cycle of  poverty. It represents personal growth, empowerment, and the boundless opportunities that education provides. \nGlobal Unity:\n This artwork reinforces the message that education is a universal right for all people, connecting the world through shared values of unity, social  responsibility, and the desire for positive change. Displayed in a prominent location in Qatar, the mural became a beacon of hope, inspiring a global audience to recognize the importance of education in  combating poverty and creating a more inclusive, equitable future. The murals were also sold as part of a fundraising initiative to support Education  Above All’s mission to bring long-term change to underserved communities. Art for a better tomorrow, where education fights poverty and empowers individuals globall`,
        Location: 'Qatar',
        Images: [
            'assets/Images/More-Projects/eaa.webp',
        ],
        Link: 'artworks/eaa',
        CategoryId: 8,

    },
    {
        Id: 3,
        Name: 'Al-Moosa Hospital',
        Description: `At Al Moosa Rehabilitation Hospital in the Kingdom of Saudi Arabia, we were entrusted with a monumental project: creating a 1,500 m² wall mural  that encapsulates the essence of hope, healing, and success. This project was not merely an artistic endeavor but a heartfelt narrative aimed at inspiring  patients, staff, and visitors alike. The mural has transformed the hospital’s walls into a living canvas of hope and positivity. Patients and visitors have shared heartfelt feedback, noting  how the artwork uplifts their spirits and fosters a sense of connection and optimism. Staff members have also expressed pride in working in an  environment enriched with such meaningful art. This project stands as a testament to the power of art to heal, inspire, and bring communities together. It reflects our commitment to crafting spaces tha resonate emotionally and visually with those who experience them. The 1,500 m² wall mural at Al Moosa Rehab Hospital is more than a visual masterpiece—it is a beacon of hope and a celebration of the human spirit.  Through thoughtful design and execution, we have created an enduring symbol of healing and success that will inspire all who walk through the  hospital’s halls`,
        Location: 'Egypt',
        Images: [
            'assets/Images/More-Projects/almoosa.webp',
        ],
        Link: 'artworks/almoosa',
        CategoryId: 8,

    },
    {
        Id: 4,
        Name: 'Al-Rayyan Club',
        Description: `In a bold collaboration with Nike, we had the honor of creating a custom wall mural for Al Rayyan Athletic Gym in Qatar. This artwork served as the  backdrop for the launch of the football team’s new kit, celebrating their legacy, resilience, and partnership with Nike. The mural set the stage for the unveiling of Al Rayyan SC’s new football kit in collaboration with Nike. Its vibrant energy and symbolic design  enhanced the event, creating a memorable visual experience that resonated with players, fans, and media alike. This project not only transformed the gym’s atmosphere but also elevated the kit launch, highlighting the intersection of art, sports, and brand identity.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/More-Projects/alrayyan.webp',
        ],
        Link: 'artworks/alrayyan',
        CategoryId: 8,

    },
    {
        Id: 5,
        Name: 'Meryal Waterpark',
        Description: `Located on Qetaifan Island North, Meryal Water Park is a haven of adventure and relaxation. We were privileged to design and create an expansive  wall mural covering over 1,500 square meters, blending art and storytelling to enhance the park’s vibrant atmosphere. The mural has transformed Meryal Water Park into an immersive destination where art and recreation meet. Visitors are greeted with a visual  masterpiece that enhances their experience, making the park a must-visit attraction`,
        Location: 'Egypt',
        Images: [
            'assets/Images/More-Projects/meryal.webp',
        ],
        Link: 'artworks/meryal',
        CategoryId: 8,

    },
    {
        Id: 6,
        Name: 'HSBC',
        Description: `This is from “Vision of Our City” Campaign. The idea of representing each location of HSBC this project we worked on the headquarters in Cairo. In the piece we include pixels and personalities that depict the role of technology and new female-led generation of entrepreneurs. This generation is putting sustainable initiatives first, represented by plants and the shape of the lotus, a symbol of rebirth Where we had the privilege of representing the iconic headquarters in Cairo. This piece is a celebration of the vibrant and evolving identity of our city. We've woven together pixels and personalities that embody the dynamic role  of technology in today's world. But more importantly, this work highlights the rise of a new, female-led generation of entrepreneurs who are reshaping  the future. Sustainability is at the heart of their vision, symbolized through elements like lush plants and the timeless lotus flower—a powerful emblem of rebirth and renewal. It's been an inspiring journey to capture the essence of Cairo, blending tradition with innovation`,
        Location: 'Egypt',
        Images: [
            'assets/Images/More-Projects/hsbc.webp',
        ],
        Link: 'artworks/hsbc',
        CategoryId: 8,

    },
    {
        Id: 7,
        Name: 'PUBG Battleground',
        Description: `In celebration of the epic Vikendi Reborn update in PUBG, we couldn’t resist the opportunity to showcase our passion for the game. Our team brought  the frosty battlegrounds of Vikendi to life with a dynamic illustration for the PS5, combining sleek design with the adrenaline-filled essence of PUBG. This artwork captures the spirit of survival, strategy, and relentless action that defines PUBG, blending iconic elements of the game with a fresh, immersive aesthetic tailored for console gamers.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/More-Projects/pubg.webp',
        ],
        Link: 'artworks/pubg',
        CategoryId: 8,

    },
    {
        Id: 5,
        Name: 'Adidas Originals',
        Description: `Bridging the gap between art and the everyday world, this project celebrates the harmony of diverse cultural influences. Tasked with creating a unique masterpiece for Adidas Originals, we combined the finest elements of modern and ancient Egyptian art and architecture to craft a design that is both innovative and timeless. This design stands as a testament to the power of collaboration and cultural storytelling. By uniting Adidas Originals with Amr Diwan’s unique artistry,  we created a piece that not only pays homage to Egypt’s rich history but also resonates with modern audiences worldwide.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/More-Projects/adidas.webp',
        ],
        Link: 'artworks/adidas',
        CategoryId: 8,

    },
];