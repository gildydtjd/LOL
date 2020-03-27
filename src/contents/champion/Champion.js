import React, { Fragment } from 'react'
import './champion.css'

export default function Champion() {
  const champion = [{
    num: "1",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Lulu_Square_0_1.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "2",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/LeeSin_Square_0_2.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "3",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Diana_Square_0_1.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "4",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Riven_Square_0_1.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "5",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Volibear_Square_0_1.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "6",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Shen_Square_0_2.jpg?v=20191212a",
    name:"가렌"
    },    
    {num: "7",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Ashe_Square_0_2.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "8",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/yummi_square_0.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "9",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Cassiopeia_Square_0_3.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "10",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Caitlyn_Square_0_2.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "11",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Kayn_Square_0.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "12",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Heimerdinger_Square_0_2.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "13",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Garen_Square_0_2.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "14",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Galio_Square_0.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "15",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Gangplank_Square_0_3.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "16",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Gragas_Square_0_2.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "17",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Graves_Square_0_2.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "18",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Gnar_Square_0_1.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "19",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Nasus_Square_0_2.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "20",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Nautilus_Square_0_1.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "21",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Maokai_Square_0_2.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "22",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Malzahar_Square_0.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "23",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Rengar_Square_0_2.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "24",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Sylas_Square_0.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "25",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Shaco_Square_0_2.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "26",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/AurelionSol_Square_0.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "27",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Ahri_Square_0_2.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "28",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Irelia_Square_0_1.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "29",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Zed_Square_0_1.jpg?v=20191212a",
    name:"가렌"
    },
    {num: "30",
    img: "http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Trundle_Square_0_1.jpg?v=20191212a",
    name:"가렌"
    }
  ]
    
    const ChampionList = champion.map((Champ) =>
    <Fragment>
    <table className="champion_box">
    <tr key={Champ.num}></tr>
    <tr><img className="champion_image"src={Champ.img}></img></tr>
    <tr>{Champ.name}</tr>
    </table>
    </Fragment>
  );

  return (
    <div className="Champ_List">
      {ChampionList}
    </div>
  );
}
