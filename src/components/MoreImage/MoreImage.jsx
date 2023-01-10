import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "../css/style.css"

export default function MoreImage() {
  return (
    <Box sx={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
      <ImageList variant="masonry" cols={3} gap={8}  >
        {itemData.map((item) => (
          <ImageListItem sx={{display: "flex", flexWrap: "wrap" }} key={item.img}>
            <img 
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{borderRadius: "50px"}}
              id= "more_image"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjshHCP7-YinKhY2D5gjRG2afJVUQS1TmKKCv4eiMev6H-9KhRKjELrSEq8mzOtuRUeOEgzYZrtAHHoOKfHK8YsIuvRLbDRvAyT03f9kLb4ECSW8LC6B_osH1twe58sfXGDn-vCS8Ytw4-bCLe-y_13P9PwXrlUmoQ2itOMwnZIWox3SRPbo-E8dD6S/s1600/iphone-14-wallpaper-mod.jpg',
    title: 'iphone14',
  },
  {
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2dakx1mBdm8z19JGT0DR7BGn2uqCuyN-0S5ytKNdJUs371KM6yOEjdl-QHS3FrhVJlBchlh4eQo7jfjQmzsqx0Ggk7DA9jR3fuyN0DOamtbzjS5B4oyvtV4t3UmAuSeFlCwtI97Llri4SOqxDgdQVzyvzEkVjGipe_iEkI_xnnLzXr4xS8Qei0Ui8vw/s3024/iphone-14-wallpaper-c.webp',
    title: 'iphone',
  },
  {
    img: 'https://cdn.appleosophy.com/2022/09/iphone14.png',
    title: 'iphone',
  },
  {
    img: 'https://www.techbyte.sk/wp-content/uploads/2022/09/iphone-14-pro-pro-max-pic-1.png',
    title: 'iphone',
  },
  {
    img: 'https://ijunkie.com/wp-content/uploads/2022/09/2-LI-iPhone-14-Pro-2.jpg',
    title: 'iphone',
  },
  {
    img: "https://thinkapple.pl/wp-content/uploads/2022/09/iphone-14-pro-max-bateria.jpg",
    title: 'iphone',
  },
  {
    img: 'https://w0.peakpx.com/wallpaper/341/268/HD-wallpaper-iphone-ios-14.jpg',
    title: 'iphone',
  },
  {
    img: 'https://cdn.tgdd.vn/Files/2022/09/06/1465710/hinh-nen-iphone-14-760x367.jpg',
    title: 'iphone',
  },
  {
    img: 'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/01/iphone-14-in-hand.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1',
    title: 'iphone',
  },
  {
    img: 'https://9to5mac.com/wp-content/uploads/sites/6/2022/08/wait-for-iphone-14-release.jpg?quality=82&strip=all&w=1000',
    title: 'iphone',
  },
  {
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlKUi2EefLz5fWrPIvkpGv79mFUsBYHwpXRWkZ5qrsi8-p3wViRyvoOdCvzU4LUS87TUNegWjdXv1qU7WtdBOBJ6_vVMqnRcIdldVtNGOLFEfmDEw14VXP78dcZGOM3qTwlvxwKiN3M5IvQlyqTLAe-eiORECj75B745DmoWtLrcXhuifQ47YkLt7m6A/s3024/iphone-14-wallpaper-b.webp',
    title: 'iphone',
  },
  {
    img: 'https://conteudo.imguol.com.br/c/noticias/ee/2019/09/07/ilustracao-fria-tilt-celular-smartphone-iphone-apple-sistema-operacional-entalhe-tela-tela-de-bloqueio-1567868367820_v2_1x1.png',
    title: 'iphone',
  },
];