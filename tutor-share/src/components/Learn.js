import React from 'react';
import LearnCard from './LearnCard'

const INITIAL_STATE = {
  cards: [{
    title: 'lol',
    desc:'sdlf',
    value: Math.floor(Math.random() * 5) + 1,
    image:'https://scontent.fybz2-2.fna.fbcdn.net/v/t1.15752-0/p480x480/118811259_353866809330635_3244566600374818727_n.png?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=YLcMMY_n5OQAX_vxzqZ&_nc_ht=scontent.fybz2-2.fna&oh=cbc1acc871c555eaec29c09e1e733849&oe=5F7B0CB0',

  }]
}

class Learn extends React.Component {

  constructor() {
    super()
    this.state = INITIAL_STATE;
  }

  render() {
  return (
    <div>

    {this.state.cards.map( (card, i) => (
      <LearnCard
      key={i}
      title={card.title}
      desc={card.desc}
      value={card.value}
      image={card.image}
      />
    ))}

      <LearnCard
      title="vape"
      desc="slat1"
      value="5"
      image="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.15752-0/p480x480/118811259_353866809330635_3244566600374818727_n.png?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=YLcMMY_n5OQAX_vxzqZ&_nc_ht=scontent.fybz2-2.fna&oh=cbc1acc871c555eaec29c09e1e733849&oe=5F7B0CB0"
      />

      <LearnCard
      title="shorty1"
      desc="slat1"
      value="3"
      image="https://scontent.fybz2-1.fna.fbcdn.net/v/t1.15752-9/p1080x2048/118617547_342967976856185_4431030853107818721_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=UUNZLVKe2GcAX-kPSSl&_nc_ht=scontent.fybz2-1.fna&oh=5a2559c18a8287d16e57a60021c2889f&oe=5F7B0D61"
      />

      <LearnCard
      title="shorty2"
      desc="slat1"
      value="3"
      image="https://scontent.fybz2-1.fna.fbcdn.net/v/t1.15752-9/p1080x2048/118472177_651373572167684_7920873609989401110_n.png?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=1tHlBqtXa04AX9VCCDh&_nc_ht=scontent.fybz2-1.fna&oh=8baade727f47cf9ce323ac08ede64538&oe=5F79F7E8"
      />

      <LearnCard
      title="shorty3"
      desc="slat1"
      value="4"
      image="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.15752-9/s1080x2048/118573616_441076833519204_7684037619959936410_n.jpg?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=_5yDsaWFAhMAX9_LJXx&_nc_ht=scontent.fybz2-2.fna&tp=7&oh=4bfedaeea4939b5eb1beb4c6a877c764&oe=5F7AA9AC"
      />

      <LearnCard
      title="shorty4"
      desc="slat1"
      value="5"
      image="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.15752-9/p1080x2048/118478942_3498958633501173_5534057496052564007_n.png?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=BEvXr1JxK1IAX9sq1_8&_nc_ht=scontent.fybz2-2.fna&oh=807a20ed4b0eb2828908a6da7196671a&oe=5F7987B2"
      />

      <LearnCard
      title="shorty5"
      desc="slat1"
      value="1"
      image="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.15752-9/p1080x2048/118488386_913144369209234_5035819811819500375_n.jpg?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=xIFOEBcIF3sAX8cmrPp&_nc_ht=scontent.fybz2-2.fna&tp=6&oh=7b0e10685be1c0cd00d03791d85765ad&oe=5F78CB53"
      />

    </div>
  );
}
}

export default Learn;
