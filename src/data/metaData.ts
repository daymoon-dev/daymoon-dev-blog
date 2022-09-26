interface metaDataProps {
  personal: {
    name: string;
    nickname: string;
    job: string;
    github: string;
    instagram: string;
  };

  career: {
    id: number;
    period: string;
    company: string;
    job: string;
    stack: string;
  }[];
};

const metaData: metaDataProps = {
  personal: {
    name: "이종엽",
    nickname: "daymoon",
    job: "Frontend",
    github: "http://github.com/daymoon-dev",
    instagram: "https://instagram.com/icn_daymoon",
  },

  career: [
    {
      id: 1,
      period: "2022. 2 ~ 현재",
      company: "이츠코어",
      job: "(주)캠시스 MES 개발 및 유지보수",
      stack: "C#, WPF(MVVM 패턴), MS-SQL",
    },
  ],
};

const fetchAddr: string = `https://ee6m4wpu2c.execute-api.ap-northeast-2.amazonaws.com/dev/post`;

export { metaData, fetchAddr };
