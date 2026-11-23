/**
 * 토마스양(양태백) 작가 공식 홈페이지 데이터셋
 * Thomas Yang (Yang Taebaek) Artist Official Portfolio Data
 */

const DEFAULT_SITE_DATA = {
  artist: {
    nameKr: "토마스양 (양태백)",
    nameEn: "Thomas Yang (Taebaek Yang)",
    chineseName: "梁太白",
    photo: "assets/images/artist_profile.svg",
    heroImage: "assets/images/gallery_unmu_1.svg",
    titles: ["사진가", "디자이너", "융합예술가", "문화관광학 박사"],
    tagline: "빛과 수묵의 경계를 넘나들며, 전통의 호흡을 현대적 시각 언어로 빚어내는 예술의 여정",
    bio: `토마스양(양태백) 작가는 사진, 회화, 서예, 문인화, 운무산수화, 도자기, 텍스타일, 설치미술에 이르기까지 순수 예술과 응용 디자인의 영역을 자유롭게 횡단하는 독보적인 융합 예술가입니다.

대학에서 디자인과 사진을 전공한 후 신문방송학·창업학·한국어 석사 및 문화관광학 박사 학위를 취득하며 인문학과 시각예술, 지역문화의 결합을 지속적으로 탐구해 왔습니다.

2021년 중국 절강성 이우시 칠묵미술관에서 열린 초대 개인전 〈빙호영월(氷壺迎月)〉에서 100점의 작품을 출품하여 현지 미술계의 뜨거운 반향 속에 전량 완판을 기록하였으며, 중국 진화시에 '양태백 미술관' 건립이 추진되는 등 글로벌 무대에서도 그의 독창적인 예술 세계를 널리 인정받고 있습니다.`,
    stats: [
      { number: "40+", label: "국내외 개인전 및 초대전" },
      { number: "100%", label: "2021 중국 초대전 전량 완판" },
      { number: "9", label: "갤러리 예술 장르 융합" },
      { number: "5", label: "시그니처 아트상품 라인" }
    ],
    education: [
      "문화관광학 박사 (Ph.D. in Culture & Tourism)",
      "신문방송학 석사 (M.A. in Journalism & Mass Communication)",
      "창업학 석사 (M.S. in Entrepreneurship)",
      "한국어학 석사 (M.A. in Korean Language)",
      "대학 디자인 및 사진 예술 전공 (B.F.A. in Design & Photography)"
    ],
    career: [
      { year: "2023 - 현재", title: "토마스양 아트 & 디자인 연구소 대표 / 문화관광 콘텐츠 자문위원" },
      { year: "2021 - 2022", title: "중국 진화시 '양태백(토마스양) 미술관' 건립 추진위원 및 초청작가" },
      { year: "2021", title: "중국 절강성 이우시 칠묵미술관 〈빙호영월(氷壺迎月)〉 대규모 초청 개인전 (100점 출품 전량 완판)" },
      { year: "2018 - 2020", title: "한중문화예술교류전 총괄 아트디렉터 및 순회초대전" },
      { year: "2015 - 2017", title: "대한민국 전통공예 및 텍스타일 문화상품 디자인 프로젝트 총괄" },
      { year: "2010 - 2014", title: "서울 예술의전당, 인사동 아라아트센터 등 개인전 및 다수 단체전" }
    ],
    awards: [
      { year: "현재", title: "한중문화교류 공헌 예술가 대상" },
      { year: "다수", title: "대한민국 미술대전 및 서예대전 입·특선 다수" },
      { year: "수상", title: "문화관광 상품개발 우수 디자인 어워드 표창" },
      { year: "수상", title: "지역 문화유산 브랜드화 공로패 수상" }
    ]
  },

  galleryCategories: [
    { id: "all", name: "전체보기", count: 18 },
    { id: "photo", name: "사진", count: 2 },
    { id: "video", name: "영상", count: 2 },
    { id: "painting", name: "회화", count: 2 },
    { id: "unmu", name: "운무산수", count: 2 },
    { id: "munin", name: "문인화", count: 2 },
    { id: "calligraphy", name: "서예", count: 2 },
    { id: "textile", name: "텍스타일", count: 2 },
    { id: "ceramics", name: "도자기", count: 2 },
    { id: "installation", name: "설치미술", count: 2 }
  ],

  galleryItems: [
    {
      id: "unmu-1",
      category: "unmu",
      categoryName: "운무산수",
      title: "태백산 운무도 (太白山雲霧圖)",
      titleEn: "Cloud and Mist of Mt. Taebaek",
      year: "2021",
      medium: "화선지에 수묵, 먹, 호분 (Korean Hanji, Sumi Ink)",
      size: "180 x 97 cm",
      image: "assets/images/gallery_unmu_1.svg",
      description: "골짜기를 가득 메우며 피어오르는 안개와 장엄한 백두대간의 능선을 대담한 먹의 번짐과 운무의 찰나로 포착한 양태백 작가의 대표 산수화입니다. 태고의 생명력과 정적감이 공존합니다."
    },
    {
      id: "unmu-2",
      category: "unmu",
      categoryName: "운무산수",
      title: "몽유운산 (夢遊雲山)",
      titleEn: "Dream Journey to the Cloud Mountains",
      year: "2020",
      medium: "수묵담채 (Ink and light color on Hanji)",
      size: "145 x 75 cm",
      image: "assets/images/gallery_unmu_2.svg",
      description: "구름의 바다 위로 솟아오른 기암괴석과 새벽의 기운을 담은 작품으로, 조선 진경산수의 전통적 필법을 현대인의 심상적 공간으로 확장하여 풀어내었습니다."
    },
    {
      id: "photo-1",
      category: "photo",
      categoryName: "사진",
      title: "빛과 하늘의 서사 · 제3망",
      titleEn: "Narrative of Light and Sky III",
      year: "2022",
      medium: "디지털 파인아트 프린트, 아카이벌 피그먼트",
      size: "120 x 80 cm (Edition of 5)",
      image: "assets/images/gallery_photo_1.svg",
      description: "산 정상에서 마주한 일출의 찰나, 구름 위를 물들이는 황금빛 광채와 대기의 밀도를 극적인 렌즈의 시선으로 기록한 사진 작품입니다."
    },
    {
      id: "photo-2",
      category: "photo",
      categoryName: "사진",
      title: "도시의 침묵과 빛의 잔상",
      titleEn: "Silence of the City and Traces of Light",
      year: "2021",
      medium: "장노출 디지털 파인아트 사진",
      size: "100 x 70 cm",
      image: "assets/images/gallery_photo_2.svg",
      description: "현대 도시 건축의 구조적 기하학과 야간 도로의 빛의 궤적을 중첩하여, 분주한 도시 속에 깃든 고요한 내면의 공간을 표현하였습니다."
    },
    {
      id: "video-1",
      category: "video",
      categoryName: "영상",
      title: "빙호영월(氷壺迎月) - 4K 미디어 파사드",
      titleEn: "Bingho-Yeongwol 4K Media Art",
      year: "2021",
      medium: "4K 싱글채널 비디오, 사운드 인스톨레이션 (04:30 Loop)",
      size: "가변 크기 (Variable Dimensions)",
      image: "assets/images/gallery_video_1.svg",
      description: "중국 이우 칠묵미술관 전시 당시 대형 스크린에 투사된 인터랙티브 미디어 아트로, 먹물이 물속에서 확산되며 달빛을 품는 과정을 유려한 디지털 영상으로 구현하였습니다."
    },
    {
      id: "video-2",
      category: "video",
      categoryName: "영상",
      title: "빛의 호흡 (Breathing Light)",
      titleEn: "Breathing Light - Kinetic Media Art",
      year: "2023",
      medium: "디지털 생성 예술 & 오디오비주얼 (06:12 Loop)",
      size: "4K UHD 프로젝션",
      image: "assets/images/gallery_video_2.svg",
      description: "오로라와 생명의 맥박처럼 율동하는 빛의 파동을 실시간 제너러티브 알고리즘과 수묵 텍스처를 융합하여 시각화한 비디오 아트워크입니다."
    },
    {
      id: "painting-1",
      category: "painting",
      categoryName: "회화",
      title: "대지의 호흡 · 혼합재료",
      titleEn: "Breath of the Earth (Mixed Media)",
      year: "2022",
      medium: "한지 캔버스에 아크릴, 먹, 모래, 금분",
      size: "162.2 x 130.3 cm (100호)",
      image: "assets/images/gallery_painting_1.svg",
      description: "한국의 흙과 한지, 서양의 아크릴 안료와 금분을 결합하여 물질성과 정신성이 교차하는 대지의 깊은 숨결을 표현한 대형 현대 회화 작품입니다."
    },
    {
      id: "painting-2",
      category: "painting",
      categoryName: "회화",
      title: "청록의 기억",
      titleEn: "Azure Memory",
      year: "2023",
      medium: "캔버스에 유채, 호분, 금박 (Oil and Gold Leaf)",
      size: "130.3 x 97 cm (60호)",
      image: "assets/images/gallery_painting_2.svg",
      description: "깊은 바다와 산야의 청록색 톤 위에 찬란한 금박의 원형을 배치하여 생명의 순환과 영원성을 상징적으로 형상화하였습니다."
    },
    {
      id: "munin-1",
      category: "munin",
      categoryName: "문인화",
      title: "청향묵란 (淸香墨蘭)",
      titleEn: "Pure Fragrance of Ink Orchid",
      year: "2021",
      medium: "옥판선지에 순수 송묵 (Handmade Hanji, Pine Soot Ink)",
      size: "70 x 135 cm",
      image: "assets/images/gallery_munin_1.svg",
      description: "선비의 지조와 그윽한 향기를 담은 묵란도로, 단숨에 그어내린 필선의 탄력과 먹의 농담 변화가 절묘한 조화를 이루는 명작입니다."
    },
    {
      id: "munin-2",
      category: "munin",
      categoryName: "문인화",
      title: "군자묵죽 (君子墨竹)",
      titleEn: "Virtuous Bamboo in Cold Winter",
      year: "2020",
      medium: "화선지에 수묵",
      size: "68 x 140 cm",
      image: "assets/images/gallery_munin_2.svg",
      description: "'세한연후지송백지후조야'의 정신을 담아 굳센 대나무의 마디와 칼날 같은 댓잎의 필력을 힘있게 표현한 문인화입니다."
    },
    {
      id: "calligraphy-1",
      category: "calligraphy",
      categoryName: "서예",
      title: "빙호영월 (氷壺迎月) - 서(書)",
      titleEn: "Bingho-Yeongwol Calligraphy",
      year: "2021",
      medium: "특제 수제한지에 유묵 (Handcrafted Hanji, Premium Ink)",
      size: "200 x 70 cm",
      image: "assets/images/gallery_calligraphy_1.svg",
      description: "2021 중국 칠묵미술관 초대전의 타이틀이자 작가의 대표 철학을 담은 서예작품. '맑고 투명한 얼음 항아리에 밝은 달빛이 머문다'는 뜻으로 맑고 청렴한 예술가의 내면을 대자해서로 휘호하였습니다."
    },
    {
      id: "calligraphy-2",
      category: "calligraphy",
      categoryName: "서예",
      title: "상선약수 (上善若水)",
      titleEn: "Highest Good is Like Water",
      year: "2022",
      medium: "화선지에 먹",
      size: "180 x 60 cm",
      image: "assets/images/gallery_calligraphy_2.svg",
      description: "노자 도덕경의 핵심 사상인 '가장 으뜸가는 선은 물과 같다'를 유려하고 막힘없는 행초서 필치로 써내려간 서예작품입니다."
    },
    {
      id: "textile-1",
      category: "textile",
      categoryName: "텍스타일",
      title: "한지와 생사(生絲)의 유영",
      titleEn: "Flow of Mulberry Fiber & Raw Silk",
      year: "2022",
      medium: "천연 염색 실크, 닥종이 섬유, 직조 타피스트리",
      size: "220 x 110 cm",
      image: "assets/images/gallery_textile_1.svg",
      description: "전통 닥나무 섬유와 실크 원사를 천연 염색한 후 입체적으로 직조하여 직물 표면에 수묵화의 번짐 효과를 입체적으로 촉각화한 섬유 예술작품입니다."
    },
    {
      id: "textile-2",
      category: "textile",
      categoryName: "텍스타일",
      title: "쪽빛 바다의 주름 (Natural Indigo Weave)",
      titleEn: "Folds of the Indigo Ocean",
      year: "2021",
      medium: "천연 쪽염색 견(Silk) 방염 직물",
      size: "190 x 95 cm",
      image: "assets/images/gallery_textile_2.svg",
      description: "한국의 전통 천연 쪽(Indigo) 염료를 10회 이상 덧염색하여 깊이 있는 청색의 층위를 만들고, 홀치기염 기법으로 파도의 리듬을 직물에 새겼습니다."
    },
    {
      id: "ceramics-1",
      category: "ceramics",
      categoryName: "도자기",
      title: "비색 청자 운학문 현대 매병",
      titleEn: "Celadon Inlaid Crane Modern Vase",
      year: "2021",
      medium: "고려청자 비색 유약, 전통 장작가마 번조",
      size: "높이 42 cm, 지름 25 cm",
      image: "assets/images/gallery_ceramics_1.svg",
      description: "고려 비색의 오묘한 옥빛을 현대적인 실루엣으로 재해석하고, 구름과 학이 승천하는 음각 상감 기법을 미니멀하게 현대화한 청자 예술품입니다."
    },
    {
      id: "ceramics-2",
      category: "ceramics",
      categoryName: "도자기",
      title: "분청사기 귀얄 철화문 대호",
      titleEn: "Buncheong Ware Brush-Mark Large Jar",
      year: "2020",
      medium: "백토 귀얄, 산화철 안료, 전통 가마 번조",
      size: "높이 36 cm, 지름 32 cm",
      image: "assets/images/gallery_ceramics_2.svg",
      description: "조선 분청사기 특유의 호방한 귀얄 붓자국 위에 철화 안료로 즉흥적인 생명의 선을 그어넣어 소박하면서도 역동적인 조형미를 보여줍니다."
    },
    {
      id: "installation-1",
      category: "installation",
      categoryName: "설치미술",
      title: "시공간의 묵향(墨香) · 칠묵미술관",
      titleEn: "Fragrance of Ink in Space-Time",
      year: "2021",
      medium: "대형 반투명 한지 스크롤, 수묵 필적, LED 조명, 음향",
      size: "12 x 8 x 4.5 m (공간 설치)",
      image: "assets/images/gallery_installation_1.svg",
      description: "2021 중국 이우 칠묵미술관 중앙 홀에 설치된 대형 공간 미술. 천장에서 바닥으로 떨어지는 수십 장의 한지 족자에 빛을 비추어 관람객이 먹과 빛 사이를 직접 거니는 공감각적 체험을 선사했습니다."
    },
    {
      id: "installation-2",
      category: "installation",
      categoryName: "설치미술",
      title: "영겁의 문 (Gate of Eternity)",
      titleEn: "Gate of Eternity - Light Portal",
      year: "2023",
      medium: "원형 황동 링, 광섬유, 사운드 센서 인터랙티브 설치",
      size: "직경 3.6 m",
      image: "assets/images/gallery_installation_2.svg",
      description: "빛의 링을 통해 과거와 미래, 자연과 인간의 영원한 연결 고리를 표현한 인터랙티브 키네틱 라이트 설치작품입니다."
    }
  ],

  productCategories: [
    { id: "all", name: "전체보기", count: 10 },
    { id: "tie", name: "넥타이", count: 2 },
    { id: "scarf", name: "스카프", count: 2 },
    { id: "celadon", name: "청자도자기", count: 2 },
    { id: "umbrella", name: "양산 및 우산", count: 2 },
    { id: "tourism", name: "관광상품개발", count: 2 }
  ],

  productItems: [
    {
      id: "prod-tie-1",
      category: "tie",
      categoryName: "넥타이",
      name: "수묵 운무산수 100% 천연 실크 넥타이",
      nameEn: "Ink Landscape 100% Silk Jacquard Tie",
      material: "최고급 천연 상사 실크 100% (100% Mulberry Silk)",
      dimensions: "길이 148 cm x 폭 8.5 cm (클래식 슬림핏)",
      image: "assets/images/product_tie_1.svg",
      features: [
        "양태백 작가의 대표작 '태백산 운무도' 원작을 고밀도 실크 자카드 직조로 구현",
        "은은한 골드 브론즈 및 잉크 네이비의 품격 있는 컬러 밸런스",
        "비즈니스 미팅, VIP 공식 의전 및 선물용 프리미엄 패키지 제공"
      ],
      description: "한국 산수의 웅장한 기운을 가슴에 품는 명품 실크 타이. 고밀도 자카드 직조로 빛의 각도에 따라 먹의 농담이 입체적으로 빛납니다."
    },
    {
      id: "prod-tie-2",
      category: "tie",
      categoryName: "넥타이",
      name: "훈민정음 한글 서예 자카드 실크 타이",
      nameEn: "Hunminjeongeum Typography Silk Tie",
      material: "천연 실크 100% (High-density Silk Jacquard)",
      dimensions: "길이 148 cm x 폭 8.2 cm",
      image: "assets/images/product_tie_2.svg",
      features: [
        "훈민정음 서문 원문의 캘리그래피 조형미를 현대적 타이 패턴으로 재해석",
        "차분한 인디고 딥블루 바탕에 레드 낙관 포인트 배색",
        "외국 귀빈 및 글로벌 비즈니스 파트너를 위한 최고의 한국 문화 선물"
      ],
      description: "한글의 조형미와 양태백 작가의 서예 필치가 어우러진 시그니처 넥타이입니다."
    },
    {
      id: "prod-scarf-1",
      category: "scarf",
      categoryName: "스카프",
      name: "빙호영월 프리미엄 실크 트윌 스카프",
      nameEn: "Bingho-Yeongwol 100% Silk Twill Square Scarf",
      material: "100% 실크 트윌 16mm (Mulberry Silk Twill)",
      dimensions: "90 cm x 90 cm (정사각형 대형)",
      image: "assets/images/product_scarf_1.svg",
      features: [
        "2021 중국 초대전 대표작 '빙호영월' 원화 디지털 아트 프린트",
        "장인이 손으로 한 땀 한 땀 마감한 정통 프렌치 핸드 롤링 헴(Hand-rolled Hem)",
        "사계절 우아한 착용감과 실크 특유의 고급스러운 광택 및 드레이프성"
      ],
      description: "얼음 항아리에 담긴 달빛의 낭만을 한 장의 부드러운 실크에 담았습니다. 일상과 격식 있는 자리를 모두 빛내주는 아트 패션 아이템입니다."
    },
    {
      id: "prod-scarf-2",
      category: "scarf",
      categoryName: "스카프",
      name: "청초 연화 문인화 실크 쉬폰 롱 스카프",
      nameEn: "Lotus Flower Silk Chiffon Long Scarf",
      material: "100% 천연 실크 쉬폰 (Pure Silk Chiffon)",
      dimensions: "45 cm x 180 cm (롱 스타일)",
      image: "assets/images/product_scarf_2.svg",
      features: [
        "진흙 속에서도 맑게 피어나는 연꽃의 단아한 선과 은은한 파스텔 핑크·청록 배색",
        "깃털처럼 가볍고 통기성이 뛰어난 프리미엄 실크 쉬폰 소재",
        "목에 가볍게 두르거나 숄처럼 걸쳐 다채로운 스타일링 가능"
      ],
      description: "연꽃의 맑은 향기를 머금은 듯 섬세하고 부드러운 감촉을 자랑하는 롱 스카프입니다."
    },
    {
      id: "prod-celadon-1",
      category: "celadon",
      categoryName: "청자도자기",
      name: "현대 비색 청자 5인 다기 세트 (다관·숙우·찻잔)",
      nameEn: "Modern Celadon 5-Person Tea Ceremony Set",
      material: "고려 전통 천연 청자토, 비색 천연 유약, 전통 장작가마",
      dimensions: "다관(320ml), 숙우(280ml), 찻잔 5개(각 70ml)",
      image: "assets/images/product_celadon_1.svg",
      features: [
        "천년 고려청자의 신비로운 비색(翡色)을 현대 다도 라이프스타일에 맞게 재창조",
        "물대 끊김이 정확하고 그립감이 뛰어난 인체공학적 디자인 다관 손잡이",
        "오동나무 수제 원목 케이스 패키징으로 소장 및 예단·선물용 최적"
      ],
      description: "차 한 잔에 고려의 숨결을 담는 명품 청자 다기 세트. 찻물이 은은히 비치는 청자 옥빛 잔은 차의 풍미와 예술적 감동을 배가시킵니다."
    },
    {
      id: "prod-celadon-2",
      category: "celadon",
      categoryName: "청자도자기",
      name: "청자 운학문 음각 아트 오브제 화병",
      nameEn: "Celadon Inlaid Crane Art Vase",
      material: "고급 청자토, 백토 상감 및 음각",
      dimensions: "높이 28 cm x 최대 지름 16 cm",
      image: "assets/images/product_celadon_2.svg",
      features: [
        "공간을 품격 있게 연출하는 모던한 곡선의 청자 인테리어 화병",
        "학의 비상과 구름을 섬세하게 음각 조각하여 길상(吉祥)과 무병장수를 기원",
        "작가 친필 서명 낙관 및 한정 보증서 포함"
      ],
      description: "거실이나 서재, 갤러리 로비에 놓았을 때 독보적인 한국적 우아함을 드러내는 청자 아트 오브제입니다."
    },
    {
      id: "prod-umbrella-1",
      category: "umbrella",
      categoryName: "양산 및 우산",
      name: "운무산수 3단 초경량 UV 암막 자동 양우산",
      nameEn: "Cloud Landscape 3-Fold Auto UV Art Umbrella",
      material: "고밀도 방수 폰지 원단 + 99.9% UV 암막 블랙 코팅 + 카본 파이버 살대",
      dimensions: "접었을 때 28 cm / 펼쳤을 때 지름 98 cm (무게 약 290g)",
      image: "assets/images/product_umbrella_1.svg",
      features: [
        "양태백 작가의 웅장한 수묵 운무산수화가 우산 외면에 고화질로 디지털 프린팅",
        "내면 99.9% 자외선 완벽 차단 암막 코팅으로 체감 온도 5도 이상 감소 효과",
        "강풍에도 뒤집히지 않는 초경량 고강도 알루미늄·카본 파이버 방풍 프레임"
      ],
      description: "비 오는 날에는 빗소리와 함께 한 폭의 산수화를 감상하고, 맑은 날에는 뜨거운 햇살을 막아주는 예술적 일상의 동반자입니다."
    },
    {
      id: "prod-umbrella-2",
      category: "umbrella",
      categoryName: "양산 및 우산",
      name: "청초 연화 문인화 2단 수동 명품 양산",
      nameEn: "Lotus Blossom Luxury 2-Fold Art Parasol",
      material: "린넨 믹스 방수 발수 원단, 원목 핸들, 황동 피팅",
      dimensions: "접었을 때 38 cm / 펼쳤을 때 지름 90 cm",
      image: "assets/images/product_umbrella_2.svg",
      features: [
        "연꽃 문인화의 담백한 필선과 은은한 수묵 채색이 어우러진 클래식 양산",
        "손에 쥐었을 때 기분 좋은 천연 천연목 곡선 손잡이와 황동 마감",
        "우아한 야외 나들이 및 한복·드레스웨어 스타일링에 완벽한 조화"
      ],
      description: "손잡이 하나까지 장인의 손길로 깎아 만든 품격 있는 수제 명품 아트 양산입니다."
    },
    {
      id: "prod-tourism-1",
      category: "tourism",
      categoryName: "관광상품개발",
      name: "지역 문화유산 K-헤리티지 관광상품 브랜딩 솔루션",
      nameEn: "Regional Cultural Heritage Tourism Branding Series",
      material: "친환경 한지 패키지, 목재, 자개, 세라믹 복합 상품군",
      dimensions: "지자체 및 공공기관 맞춤형 모듈 패키지",
      image: "assets/images/product_tourism_1.svg",
      features: [
        "문화관광학 박사 양태백 작가의 전문 학술 역량과 예술적 조형 감각의 결합",
        "지역 고유의 역사 인물, 설화, 자연 유산을 현대적 문화관광 굿즈로 기획 개발",
        "국립박물관 뮤지엄숍, 공항 면세점, 지자체 VIP 공식 기념품 납품 실적 보유"
      ],
      description: "단순한 기념품을 넘어 지역의 혼과 예술적 가치를 세계인에게 전달하는 프리미엄 문화관광 상품화 개발 프로젝트입니다."
    },
    {
      id: "prod-tourism-2",
      category: "tourism",
      categoryName: "관광상품개발",
      name: "전통 한옥 & K-컬처 시그니처 트래블 기프트 에디션",
      nameEn: "Hanok & K-Culture Signature Travel Gift Set",
      material: "오동나무 함, 실크 보자기를 활용한 친환경 아트 기프트",
      dimensions: "28 cm x 20 cm x 8 cm",
      image: "assets/images/product_tourism_2.svg",
      features: [
        "한국의 사계절과 다도(茶道), 한지 서예를 결합한 최고급 문화 기프트 세트",
        "기업 및 기관 로고 각인 및 커스텀 디자인 제작 지원",
        "국내외 문화관광 박람회 및 외교 사절단 공식 증정품 채택"
      ],
      description: "한국의 정취와 품격을 오롯이 담아낸 하이엔드 문화관광 에디션입니다."
    }
  ],

  press: [
    {
      id: "press-1",
      badge: "중국 초대전 보도",
      date: "2021.12",
      media: "시사뉴스 · 한중문화교류 통신",
      title: "양태백 작가, 中 이우 칠묵미술관 〈빙호영월〉 초대전 100점 완판 화제",
      summary: "한국의 융합 예술가 토마스양(양태백) 작가가 중국 절강성 이우시 선전부 및 문화방송관광체육국의 초청으로 개최한 대규모 개인전에서 출품작 100점이 전량 완판되는 기염을 토했다.",
      content: `중국 절강성 이우시 칠묵미술관에서 열린 한국의 대표적 융합 예술가 양태백(토마스양) 작가의 초청 개인전 〈빙호영월(氷壺迎月)〉이 현지 미술계와 컬렉터들의 폭발적인 찬사 속에 성황리에 막을 내렸다.

이번 전시에는 작가가 수년간 심혈을 기울여 완성한 수묵화, 서예, 파인아트 사진 등 총 100점의 대작들이 출품되었으며, 전시 개막 직후 현장에서 100점 전량이 완판되는 이례적인 기록을 세웠다.

현지 큐레이터는 "양태백 작가의 작품은 동양 전통 수묵의 깊이를 유지하면서도 현대적 조형미와 빛의 서사를 대담하게 결합하여 중국 컬렉터들에게 깊은 울림을 주었다"고 평가했다. 이러한 성공에 힘입어 중국 진화시에서는 한국 예술가로서는 극히 드물게 '양태백 미술관' 건립을 공식 추진하기로 결정하였다.`
    },
    {
      id: "press-2",
      badge: "미술평론",
      date: "2022.03",
      media: "월간 미술세계",
      title: "평론: 얼음 항아리에 달을 담다 — 양태백 작가의 수묵과 빛의 연금술",
      summary: "미술평론가 정진우 박사가 분석한 토마스양의 예술 세계: 전통 서화의 정신성을 현대적 미디어와 상품 디자인의 일상성으로 확장하는 융합의 미학.",
      content: `양태백의 예술 세계는 '경계 허물기'의 치열한 여정이다. 그의 붓끝에서 태어나는 운무산수는 조선 산수화의 진경(眞景)을 계승하면서도, 사진가로서 체득한 빛의 굴절과 렌즈의 시야가 깊숙이 스며들어 있다.

그가 즐겨 쓰는 화두인 〈빙호영월(氷壺迎月)〉은 얼음처럼 투명하고 맑은 항아리가 밤하늘의 둥근 달을 품듯, 세속의 번뇌를 씻어낸 순수한 영혼으로 삼라만상을 비추겠다는 예술적 선언이다. 

더욱 주목할 점은 그의 예술이 화랑의 벽면에만 갇혀 있지 않다는 사실이다. 그는 문화관광학 박사이자 뛰어난 디자이너로서 자신의 예술적 모티브를 넥타이, 스카프, 청자, 우산, 문화관광상품으로 끊임없이 환생시킨다. 이는 예술을 특정 계층의 전유물에서 만인의 일상 속 숨결로 되돌려 놓는 현대적 의미의 '실천적 예술가'의 면모를 명징하게 보여준다.`
    },
    {
      id: "press-3",
      badge: "작가 인터뷰",
      date: "2023.05",
      media: "아트 인사이트 (Art Insight)",
      title: "토마스양 작가 인터뷰: \"예술은 삶의 향기이자 세계와 소통하는 언어\"",
      summary: "사진, 서예, 회화부터 K-헤리티지 문화관광상품 개발까지 쉼 없이 질주하는 융합 예술가 토마스양이 말하는 창작의 원동력과 향후 비전.",
      content: `"장르의 벽은 인간이 편의를 위해 그어놓은 선일 뿐, 예술의 본질은 결국 영혼의 울림입니다."

토마스양 작가는 작업실에서 붓을 잡을 때나, 카메라 셔터를 누를 때나, 실크 원단에 인쇄될 패턴을 디자인할 때나 본질은 언제나 하나라고 말한다. 

그는 "우리의 찬란한 전통 수묵과 서예, 청자의 비색은 21세기 글로벌 시대에도 세계인의 마음을 사로잡을 수 있는 가장 현대적인 아름다움"이라며, "앞으로도 예술 작품과 아트상품을 통해 한국 문화의 우수성을 널리 알리고 대중과 따뜻하게 호흡하고 싶다"고 포부를 밝혔다.`
    }
  ],

  album: [
    {
      id: "alb-1",
      title: "2021 중국 이우 칠묵미술관 〈빙호영월〉 초대전 개막식",
      category: "해외 초대전",
      year: "2021.11",
      image: "assets/images/album_exhibit_1.svg",
      caption: "한중문화교류 100점 전량 완판을 기록한 중국 칠묵미술관 대규모 초청 개인전 개막 리셉션 현장"
    },
    {
      id: "alb-2",
      title: "토마스양 아틀리에 작업 풍경",
      category: "창작 현장",
      year: "2022.08",
      image: "assets/images/album_studio_1.svg",
      caption: "대형 한지 위에 일필휘지의 먹선을 긋는 양태백 작가의 치열한 창작의 순간"
    },
    {
      id: "alb-3",
      title: "중국 진화시 '양태백 미술관' 건립 추진 협약식",
      category: "문화교류 협약",
      year: "2021.12",
      image: "assets/images/album_collab_1.svg",
      caption: "현지 문화기관 관계자들과 함께 양태백 미술관 건립을 위한 공식 프로젝트 협약 조인식"
    }
  ]
};

// ==========================================================================
// ADMIN CMS & LOCALSTORAGE PERSISTENCE SYSTEM
// ==========================================================================
const STORAGE_KEY = 'thomasyang_site_data';
const ADMIN_PASSWORD_KEY = 'thomasyang_admin_pw';
const DEFAULT_ADMIN_PW = '1234';

function getAdminPassword() {
  return localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_ADMIN_PW;
}

function setAdminPassword(newPw) {
  localStorage.setItem(ADMIN_PASSWORD_KEY, newPw);
}

function getSiteData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        ...DEFAULT_SITE_DATA,
        ...parsed,
        artist: { ...DEFAULT_SITE_DATA.artist, ...(parsed.artist || {}) },
        galleryCategories: DEFAULT_SITE_DATA.galleryCategories,
        productCategories: DEFAULT_SITE_DATA.productCategories,
        galleryItems: parsed.galleryItems || DEFAULT_SITE_DATA.galleryItems,
        productItems: parsed.productItems || DEFAULT_SITE_DATA.productItems,
        press: parsed.press || DEFAULT_SITE_DATA.press,
        album: parsed.album || DEFAULT_SITE_DATA.album
      };
    } catch (e) {
      console.error('Error loading site data from localStorage:', e);
    }
  }
  return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
}

let SITE_DATA = getSiteData();

function saveSiteData(newData) {
  SITE_DATA = newData;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
}

function resetSiteData() {
  localStorage.removeItem(STORAGE_KEY);
  SITE_DATA = JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
}

function exportSiteDataAsFile() {
  const dataString = `/**
 * 토마스양(양태백) 작가 공식 홈페이지 데이터셋 (관리자 수정본)
 * Generated by Admin CMS on ${new Date().toISOString()}
 */

const DEFAULT_SITE_DATA = ${JSON.stringify(SITE_DATA, null, 2)};

// ==========================================================================
// ADMIN CMS & LOCALSTORAGE PERSISTENCE SYSTEM
// ==========================================================================
const STORAGE_KEY = 'thomasyang_site_data';
const ADMIN_PASSWORD_KEY = 'thomasyang_admin_pw';
const DEFAULT_ADMIN_PW = '1234';

function getAdminPassword() {
  return localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_ADMIN_PW;
}

function setAdminPassword(newPw) {
  localStorage.setItem(ADMIN_PASSWORD_KEY, newPw);
}

function getSiteData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        ...DEFAULT_SITE_DATA,
        ...parsed,
        artist: { ...DEFAULT_SITE_DATA.artist, ...(parsed.artist || {}) },
        galleryCategories: DEFAULT_SITE_DATA.galleryCategories,
        productCategories: DEFAULT_SITE_DATA.productCategories,
        galleryItems: parsed.galleryItems || DEFAULT_SITE_DATA.galleryItems,
        productItems: parsed.productItems || DEFAULT_SITE_DATA.productItems,
        press: parsed.press || DEFAULT_SITE_DATA.press,
        album: parsed.album || DEFAULT_SITE_DATA.album
      };
    } catch (e) {
      console.error('Error loading site data from localStorage:', e);
    }
  }
  return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
}

let SITE_DATA = getSiteData();

function saveSiteData(newData) {
  SITE_DATA = newData;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
}

function resetSiteData() {
  localStorage.removeItem(STORAGE_KEY);
  SITE_DATA = JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
}
`;

  const blob = new Blob([dataString], { type: 'application/javascript;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

