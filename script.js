/* ===============================
   1) 시설별 체크리스트 데이터
   =============================== */
const checklistMap = {
     "교실": [
      { section: "바닥", items:[
        { code:"1.1.1", desc:"교실 바닥의 안전 상태 (균열, 마감재 탈락/노후화, 보행 장애물 여부)" }
      ]},
      { section: "벽", items:[
        { code:"1.2.1", desc:"벽체 안전 상태 (균열 및 기울어짐 등 여부)" },
        { code:"1.2.2", desc:"벽체 부착물 안전 상태 (칠판, 게시판 및 선풍기 등의 고정 여부)" },
        { code:"1.2.3", desc:"콘센트 안전 상태 (먼지, 탄 자국, 고정 불량, 문어발식 사용 여부)" }
      ]},
      { section: "출입문", items:[
        { code:"1.3.1", desc:"출입문의 안전 상태 (레일, 끼임 방지 패드, 부착물 등 상태)" }
      ]},
      { section: "창호", items:[
        { code:"1.4.1", desc:"창호 안전 상태 (유리, 방충망, 추락 방지 시설 고정 등 상태)" },
        { code:"1.4.2", desc:"창호 개폐 상태 (레일, 창틀의 뒤틀림 등 손상 여부)" }
      ]},
      { section: "복도", items:[
        { code:"1.5.1", desc:"복도의 안전 상태 (보행 장애물, 피난 관련 시설 등 상태)" }
      ]},
      { section: "천장", items:[
        { code:"1.6.1", desc:"천장 마감재 안전 상태 (처짐, 파손, 누수 흔적 등 여부)" },
        { code:"1.6.2", desc:"천장 부착물 안전 상태 (전등, 선풍기, 냉난방기, 빔프로젝터 등 고정 여부)" }
      ]},
      { section: "기타", items:[
        { code:"1.7.1", desc:"소화 설비 및 가스 설비 안전 상태 (파손, 동작 여부 및 전문 점검 결과)" },
        { code:"1.7.2", desc:"책걸상 안전 상태 (파손 등 상태)" }
      ]}
    ],
    "관리실": [
      { section: "바닥", items:[
        { code:"1.1.1", desc:"관리실 바닥의 안전 상태 (균열, 마감재 탈락/노후화, 보행 장애물 여부)" }
      ]},
      { section: "벽", items:[
        { code:"1.2.1", desc:"벽체 안전 상태 (균열 및 기울어짐 등 여부)" },
        { code:"1.2.2", desc:"벽체 부착물 안전 상태 (칠판, 게시판 및 선풍기 등의 고정 여부)" },
        { code:"1.2.3", desc:"콘센트 안전 상태 (먼지, 탄 자국, 고정 불량, 문어발식 사용 여부)" }
      ]},
      { section: "출입문", items:[
        { code:"1.3.1", desc:"출입문의 안전 상태 (레일, 끼임 방지 패드, 부착물 등 상태)" }
      ]},
      { section: "창호", items:[
        { code:"1.4.1", desc:"창호 안전 상태 (유리, 방충망, 추락 방지 시설 고정 등 상태)" },
        { code:"1.4.2", desc:"창호 개폐 상태 (레일, 창틀의 뒤틀림 등 손상 여부)" }
      ]},
      { section: "복도", items:[
        { code:"1.5.1", desc:"복도의 안전 상태 (보행 장애물, 피난 관련 시설 등 상태)" }
      ]},
      { section: "천장", items:[
        { code:"1.6.1", desc:"천장 마감재 안전 상태 (처짐, 파손, 누수 흔적 등 여부)" },
        { code:"1.6.2", desc:"천장 부착물 안전 상태 (전등, 선풍기, 냉난방기, 빔프로젝터 등 고정 여부)" }
      ]},
      { section: "기타", items:[
        { code:"1.7.1", desc:"소화 설비 및 가스 설비 안전 상태 (파손, 동작 여부 및 전문 점검 결과)" },
        { code:"1.7.2", desc:"책걸상 안전 상태 (파손 등 상태)" }
      ]}
    ],
    "도서관": [
      { section: "바닥", items:[
        { code:"1.1.1", desc:"도서관 바닥의 안전 상태 (균열, 마감재 탈락/노후화, 보행 장애물 여부)" }
      ]},
      { section: "벽", items:[
        { code:"1.2.1", desc:"벽체 안전 상태 (균열 및 기울어짐 등 여부)" },
        { code:"1.2.2", desc:"벽체 부착물 안전 상태 (칠판, 게시판 및 선풍기 등의 고정 여부)" },
        { code:"1.2.3", desc:"콘센트 안전 상태 (먼지, 탄 자국, 고정 불량, 문어발식 사용 여부)" }
      ]},
      { section: "출입문", items:[
        { code:"1.3.1", desc:"출입문의 안전 상태 (레일, 끼임 방지 패드, 부착물 등 상태)" }
      ]},
      { section: "창호", items:[
        { code:"1.4.1", desc:"창호 안전 상태 (유리, 방충망, 추락 방지 시설 고정 등 상태)" },
        { code:"1.4.2", desc:"창호 개폐 상태 (레일, 창틀의 뒤틀림 등 손상 여부)" }
      ]},
      { section: "복도", items:[
        { code:"1.5.1", desc:"복도의 안전 상태 (보행 장애물, 피난 관련 시설 등 상태)" }
      ]},
      { section: "천장", items:[
        { code:"1.6.1", desc:"천장 마감재 안전 상태 (처짐, 파손, 누수 흔적 등 여부)" },
        { code:"1.6.2", desc:"천장 부착물 안전 상태 (전등, 선풍기, 냉난방기, 빔프로젝터 등 고정 여부)" }
      ]},
      { section: "기타", items:[
        { code:"1.7.1", desc:"소화 설비 및 가스 설비 안전 상태 (파손, 동작 여부 및 전문 점검 결과)" },
        { code:"1.7.2", desc:"책걸상 안전 상태 (파손 등 상태)" }
      ]}
    ],
    "과학실": [
      { section: "안전계획", items: [
          { code:"2.1.1", desc:"안전수칙/대응요령 게시 상태" }
      ]},
      { section: "안전관리", items: [
          { code:"2.2.1", desc:"실험 안전용품 구비 상태 (실험복, 마스크 및 보안경 등 구비 여부)" },
          { code:"2.2.2", desc:"실험 중 사고 대비 상태 (소화기, 콘센트, 비상구 표시, 대피로 등 상태)" },
          { code:"2.2.3", desc:"시약 보관 상태 (시약보관함 유무, 잠금 및 환기 상태 등)" },
          { code:"2.2.4", desc:"특수 시약 관리 상태 (독극물, 위험 실험 시약 보관 상태 등)" },
          { code:"2.2.5", desc:"사후 처리 상태 (사용 후 약품 및 약품출납대장 관리, 청소 등)" }
      ]},
      { section: "기타", items: [
          { code:"2.3.1", desc:"보안 관리 상태 (실험실 잠금장치, CCTV 상태 등)" },
          { code:"2.3.2", desc:"비상 시 대비 상태 (비상대피로 확보, 비상연락망 게시 여부 등)" }
      ]},
      { section:"공통", items:[
        { code:"6.4", desc:"비상 시 대비 상태(소화기, 완강기, 비상구 표시 등)" },
        { code:"6.4.2.", desc:"콘센트 사용 상태(문어발식 사용 여부, 탄자국, 청소 상태 등)" },
        { code:"6.4.3.", desc:"가스 점검 및 화재 감지기 정기 점검 여부" }, 
        { code:"6.4.4.", desc:"출입문의 안전 상태 (레일, 끼임 방지 패드, 부착물 등 상태)" },
        { code:"6.4.5.", desc:"냉난방기, 선풍기 등의 고정 및 정상 작동 여부"},  
        { code:"6.4.6.", desc:"칠판, 게시판, 유리, 방충망, 추락 방지 시설 고정 등 상태"},
        { code:"6.4.7.", desc:"바닥, 천장 및 벽체 마감재 안전 상태 균열, 파손, 누수 흔적 등 여부"}
      ]}
    ],
    "식당": [
      { section:"식당 및 주방", items:[
        { code:"6.1", desc:"일일 위생안전점검표 작성 상태" },
        { code:"6.2", desc:"일일 화재예방점검표 작성 상태" },
        { code:"6.3", desc:"일일 청소점검표 작성 상태" }
      ]},
      { section:"식당, 주방, 조리원휴게실, 영양교사실, 부식창고, 보일러실", items:[
        { code:"6.4", desc:"비상 시 대비 상태(소화기, 완강기, 비상구 표시 등)" },
        { code:"6.4.2.", desc:"콘센트 사용 상태(문어발식 사용 여부, 탄자국, 청소 상태 등)" },
        { code:"6.4.3.", desc:"가스 점검 및 화재 감지기 정기 점검 여부" }, 
        { code:"6.4.4.", desc:"출입문의 안전 상태 (레일, 끼임 방지 패드, 부착물 등 상태)" },
        { code:"6.4.5.", desc:"냉난방기, 선풍기 등의 고정 및 정상 작동 여부"},  
        { code:"6.4.6.", desc:"게시판, 유리, 방충망, 추락 방지 시설 고정 등 상태"},
        { code:"6.4.7.", desc:"바닥, 천장 및 벽체 마감재 안전 상태 균열, 파손, 누수 흔적 등 여부"}
      ]}
    ],
    "강당 및 체육실": [
      { section:"강당 체육시설", items:[
        { code:"4.2.1", desc:"체육시설의 근본적 낙후/파손 상태" },
        { code:"4.2.2", desc:"체육시설의 금이 가거나 깨진 부위 유무" },
        { code:"4.2.3", desc:"금속 재질 체육시설의 녹 발생, 페인트 칠 벗겨짐 여부" },
        { code:"4.2.4", desc:"체육시설 내 고압선, 유독물질, 유리조각 등 위험물질 존재 여부" }
      ]},
     { section:"공통", items:[
        { code:"6.4", desc:"비상 시 대비 상태(소화기, 완강기, 비상구 표시 등)" },
        { code:"6.4.2.", desc:"콘센트 사용 상태(문어발식 사용 여부, 탄자국, 청소 상태 등)" },
        { code:"6.4.3.", desc:"가스 점검 및 화재 감지기 정기 점검 여부" }, 
        { code:"6.4.4.", desc:"출입문의 안전 상태 (레일, 끼임 방지 패드, 부착물 등 상태)" },
        { code:"6.4.5.", desc:"냉난방기, 선풍기 등의 고정 및 정상 작동 여부"},  
        { code:"6.4.6.", desc:"게시판, 유리, 방충망, 추락 방지 시설 고정 등 상태"},
        { code:"6.4.7.", desc:"바닥, 천장 및 벽체 마감재 안전 상태 균열, 파손, 누수 흔적 등 여부"}
      ]}
    ],
    "통학로": [
      { section:"통학로", items:[
        { code:"5.1.1", desc:"교내 차량 통행로 및 통학로 안전 상태 (보차도 구분, 도로 파손 여부 및 장애물 유무)" },
        { code:"5.1.2", desc:"학교 앞 통학로 및 도로의 안전 상태 (보행 장애물 유무, 도로/보도블록 등 파손 상태)" },
        { code:"5.1.3", desc:"학교 앞 교통시설물 안전 상태 (교통표지판, 볼록거울, 안전펜스 등 설치 및 파손 여부, 시야 확보 및 어린이보호구역 지정 여부)" }
      ]},
      { section:"통학버스", items:[
        { code:"5.2.1", desc:"어린이통학버스 등록 여부 및 차량 앞유리 통학버스 신고필증 부착 여부", default:"해당없음" },
        { code:"5.2.2", desc:"차내 모든 좌석 안전벨트/안전시트의 설치 및 정상 작동 상태", default:"해당없음" },
        { code:"5.2.3", desc:"광곽후사경 설치 및 고정 여부", default:"해당없음" },
        { code:"5.2.4", desc:"차량 내 날카로운 곳 또는 불필요한 물건 유무", default:"해당없음" },
        { code:"5.2.5", desc:"정기적 차량 안전점검 실시/기록 여부 및 안전수칙 부착, 안전교육 실시 여부", default:"해당없음" }
      ]}
    ],
    "건축물": [ 
          { section:"건축 분야", items:[
            { code:"3.1.1", desc:"구조체 안전 상태 (보, 기둥, 슬래브, 벽체의 균열 및 기울어짐 여부)" },
             { code:"3.1.2", desc:"옥상 안전 상태 (균열, 탈락, 청소 및 배수 상태)" },
          { code:"3.1.3", desc:"화장실 안전 상태 (파손, 동작 등 상태)" },
          { code:"3.1.4", desc:"계단 안전 상태 (난간 고정, 미끄럼방지 패드 고정 여부 등)" },
            { code:"3.1.5", desc:"마감재 안전 상태 (파손, 고정 등 상태)" }
          ]},
           { section:"일반시설물 분야", items:[
            { code:"3.2.1", desc:"일반시설 안전 상태 (옹벽, 담장, 석축, 절개사면, 교문 등의 이상 여부)" },
             { code:"3.2.3", desc:"CCTV 안전 상태 (파손, 고정, 작동 등 여부)" }
          ]},
          { section:"소방 분야", items:[
            { code:"3.3.1", desc:"소화 및 감지 설비 안전 상태 (소화기, 소화전의 동작, 고정 등 상태)" },
            { code:"3.3.2", desc:"피난 및 방화 설비 안전 상태 (피난구, 유도표시/등, 방화문/셔터 등의 상태)" },
            { code:"3.3.3", desc:"소방용역업체 점검 및 지적 사항 조치 상태" },
            { code:"3.3.4", desc:"소방차 진입로 상태" }
          ]},
          { section:"전기 분야", items:[
            { code:"3.4.1", desc:"조명 설비 안전 상태 (동작, 파손, 고정 등 상태)" },
            { code:"3.4.2", desc:"전열 설비 안전 상태 (동작, 파손, 고정, 문어발식 및 개인 전열기 사용 등)" },
            { code:"3.4.3", desc:"전기 관리실의 안전 상태 (전기 관련 시설의 위험/접근금지 경고 표시 상태)" },
            { code:"3.4.4", desc:"전기용역업체 점검 및 지적 사항 조치 상태" }
          ]},
          { section:"기계 분야", items:[
            { code:"3.5.1", desc:"냉난방 설비 안전 상태 (실내외기 등의 동작, 파손, 부식 등 상태)" },
            { code:"3.5.2", desc:"급수 및 급탕 설비 안전 상태 (펌프, 보일러, 세면기 등의 동작, 파손, 부식, 누수 등)" },
            { code:"3.5.3", desc:"환기 설비 안전 상태 (환풍기 등의 동작, 파손, 부식 등 상태)" },
            { code:"3.5.4", desc:"승강기 등 안전 상태 (승강기, 비상통화장치 동작, 파손, 점검 등 여부)" },
          { code:"3.5.5", desc:"기계 관리실의 안전 상태 (기계실, 보일러실 위험/접근금지 경고 표시 상태)" },
            { code:"3.5.6", desc:"승강기 및 보일러 정기 점검 상태" }
          ]},
          { section:"가스 분야", items:[
            { code:"3.6.1", desc:"가스 설비 안전 상태 (가스 설비 부식/파손 상태 및 전문 점검 결과)" },
            { code:"3.6.2", desc:"가스 관리실 안전 상태 (가스 관련 시설의 위험/접근금지 경고 표시 상태)" },
            { code:"3.6.3", desc:"기타 가스 설비 정기점검 상태" }
       ]}
    ],

    "기타": [
      { section:"공통", items:[
        { code:"0.1", desc:"비상구 및 피난통로 확보" }
      ]}
    ],
    "씨름장": [
      { section: "모래", items: [
        { code: "1.1.1", desc: "모래 깊이 유지 여부" },
        { code: "1.1.2", desc: "모래 안전 상태 (습기 또는 건조, 경도 상태)" },
        { code: "1.1.3", desc: "모래 오염 상태 (이물질 여부)" },
      ]},
      { section: "체육시설", items: [
        { code: "4.2.1", desc: "체육시설의 근본적 낙후/파손 상태" },
        { code: "4.2.2", desc: "체육시설의 금이 가거나 깨진 부위 유무" },
        { code: "4.2.3", desc: "금속 재질 체육시설의 녹 발생 여부" },
        { code: "4.2.4", desc: "씨름장 샤워실, 화장실 수전, 세탁기, 운동기구 위생상태" }
      ]},
      { section:"공통", items:[
        { code:"6.4", desc:"비상 시 대비 상태(소화기, 완강기, 비상구 표시 등)" },
        { code:"6.4.2", desc:"콘센트 사용 상태(멀티탭 문어발식 사용 여부, 탄자국, 청소 상태 등)" },
        { code:"6.4.3", desc:"소화기 및 화재 감지기 유무" },
        { code:"6.4.4", desc:"출입문의 안전 상태 (레일, 끼임 방지 패드, 부착물 등 상태)" },
        { code:"6.4.5", desc:"조명 안전 상태" },
        { code:"6.4.6", desc:"울타리, 난간 등 안전시설 고정 상태" },
        { code:"6.4.7", desc:"바닥 및 벽체 마감재 안전 상태 (균열, 파손 등 여부)" }
      ]}
    ],
    "표지": [
      { section: "표지", items: [
        { code: "표", desc: "행정용 표지" }
      ]}
    ]
  };

/* ===============================
   2) 네비게이션 데이터 (구조)
   =============================== */
const NAV_STRUCTURE = [
  {
    building: "본관",
    floors: [
      { floor: "1층", rooms: ["행정실","교장실","교무실","방송실","늘봄지원실","보건실","늘봄(나온반)","2-1반","2톡톡방","피아노실","선택교육실","정보관리실","기록물열람실","체력단련실"] },
      { floor: "2층", rooms: ["위센터","4-1반","4-2반","메이커실","창의융합실","컴퓨터실 및 컴퓨터준비실","수석교사실","스포츠실","수업나눔실","실과실","교사연구실"] },
      { floor: "3층", rooms: ["과학실 및 준비실","미술실 및 준비실","음악실 및 준비실","6-1반","6-2반","다목적실","밴드실","전담실(음악)","전담실(과학)","교사연구실"] }
    ]
  },
  {
    building: "후관",
    floors: [
      { floor: "1층", rooms: ["급식소","이닦기교실","1-1반","1통통방","늘봄(가온반)","나눔반","교사연구실"] },
      { floor: "2층", rooms: ["도서관","wee클래스","3-1반","방과후교실1","늘봄(다온반)","열린반","교사연구실"] },
      { floor: "3층", rooms: ["강당","체육실","전담실(체육)","5-1반","교육실(사서,보건,상담)"] }
    ]
  },
  {
    building: "통학로",
    floors: [
      { floor: "", rooms: ["통학로"] }
    ]
  },
  {
    building: "씨름장",
    floors: [
      { floor: "씨름장", rooms: ["씨름장"] }
    ]
  },
  {
    building: "건축물",
    floors: [ 
      { floor: "교사동", rooms: ["본관동", "후관동"] },
      { floor: "씨름장", rooms: ["건물(씨름)"] },
      { floor: "관사", rooms: ["관사"] }
    ] 
  },
];

/* ===============================
   3) 유틸리티: 구역 이름으로 그룹 찾기
   =============================== */
function groupForArea(area) {
  const a = String(area || "").replace(/\s+/g, "");
  
  if (a.includes("씨름") && !a.includes("건물")) return "씨름장";
  if (a.includes("통학로")) return "통학로";
  if (a.includes("본관동") || a.includes("후관동") || a.includes("관사")|| a.includes("건물(씨름)")) return "건축물";
  if (a.includes("도서관")) return "도서관";
  if (a.includes("과학실")) return "과학실";
  if (a.includes("식당") || a.includes("주방") || a.includes("영양") || a.includes("급식")) return "식당";
  // '전담' (예: 전담실(체육))은 관리실 체크리스트 사용
  if (a.includes("전담")) return "관리실";
  if (a.includes("강당") || a.includes("체육")) return "강당 및 체육실";
  
  // 관리실 키워드
  const officeKeywords = ["교장실","교무실","행정실","방송실","숙직실","보건실","위센터","wee클래스","늘봄지원실"];
  if (officeKeywords.some(k => a.includes(k))) return "관리실";

  // 나머지는 교실로 간주
  return "교실";
}

/* ===============================
   4) 상단 메가 메뉴 생성 (Mega Menu Builder)
   =============================== */
function buildNav() {
  const nav = document.getElementById("topNav");
  if (!nav) return;
  nav.innerHTML = "";

  NAV_STRUCTURE.forEach(b => {
    // 1. 메뉴 그룹 (본관, 후관...)
    const groupDiv = document.createElement("div");
    groupDiv.className = "nav-group";

    // 메뉴 타이틀 (마우스 올릴 버튼)
    const titleDiv = document.createElement("div");
    titleDiv.className = "nav-title";
    titleDiv.textContent = b.building;
    
    // 2. 메가 메뉴 패널 (Hover 시 전체 너비로 뜨는 창)
    const megaMenu = document.createElement("div");
    megaMenu.className = "mega-menu";

    // 3. 층별 컬럼 생성
    b.floors.forEach(f => {
      const col = document.createElement("div");
      col.className = "floor-column";

      const fTitle = document.createElement("div");
      fTitle.className = "floor-title";
      fTitle.textContent = f.floor;

      const roomGrid = document.createElement("div");
      roomGrid.className = "room-grid";

      f.rooms.forEach(room => {
        const btn = document.createElement("button");
        btn.className = "nav-btn";
        btn.textContent = room;
        btn.dataset.area = room;
        btn.dataset.building = b.building;
        btn.dataset.floor = f.floor;
        
        // 클릭 이벤트
        btn.addEventListener("click", (e) => {
          e.stopPropagation(); // 메뉴 닫힘 간섭 방지
          selectArea(room, btn, b.building, f.floor);
        });

        roomGrid.appendChild(btn);
      });

      col.appendChild(fTitle);
      col.appendChild(roomGrid);
      megaMenu.appendChild(col);
    });

    groupDiv.appendChild(titleDiv);
    groupDiv.appendChild(megaMenu);
    nav.appendChild(groupDiv);
  });
}

/* ===============================
   5) 동작 로직: 구역 선택 및 렌더링
   =============================== */
function selectArea(areaName, targetBtn, building, floor) {
  // 버튼 활성 상태 표시
  document.querySelectorAll(".nav-btn, .direct-btn").forEach(b => b.classList.remove("active"));
  if (targetBtn) targetBtn.classList.add("active");

  // 체크리스트 렌더링
  console.log('selectArea clicked ->', areaName, building, floor);
  renderChecklist(areaName, building, floor);
}

function getLocationInfo(areaName, building, floor) {
  // building과 floor 정보가 전달되면 그것을 사용
  if (building && floor) {
    return `${building} ${floor}`;
  }
  
  // 폴백: NAV_STRUCTURE에서 구역이 속한 건물과 층을 찾기
  for (const bldg of NAV_STRUCTURE) {
    if (!bldg.floors) continue;
    for (const flr of bldg.floors) {
      if (flr.rooms && flr.rooms.includes(areaName)) {
        return `${bldg.building} ${flr.floor}`;
      }
    }
  }
  return "위치 정보 없음";
}

function renderChecklist(area, building, floor) {
  const areaDisplay = document.getElementById("area-display");
  areaDisplay.textContent = area;
  areaDisplay.classList.add("selected");
  const locationInfo = getLocationInfo(area, building, floor);
  document.getElementById("header-location-display").textContent = locationInfo;
  const group = groupForArea(area);
  console.log(`renderChecklist: area="${area}" building="${building}" floor="${floor}" -> group="${group}"`);
  const tbody = document.getElementById("checklist-body");
  tbody.innerHTML = "";
  const data = checklistMap[group] || checklistMap["교실"]; 

  if (!data) {
    tbody.innerHTML = `<tr><td colspan="3" style="padding:20px;">데이터가 없습니다.</td></tr>`;
    return;
  }

  data.forEach(sec => {
    // 섹션 헤더
    const trSec = document.createElement("tr");
    trSec.className = "section-header";
    trSec.innerHTML = `<td colspan="3">${sec.section}</td>`;
    tbody.appendChild(trSec);

    // 항목들
    sec.items.forEach(it => {
      const tr = document.createElement("tr");
      const selectedOption = it.default ? `<option selected>${it.default}</option>` : `<option></option>`;
      tr.innerHTML = `
        <td style="text-align:left; padding-left:15px;">${it.code} ${it.desc}</td>
        <td>
          <select style="width:100%; padding:6px; border-radius:4px; border:1px solid #ddd;">
            <option>양호</option>
            <option>보통</option>
            <option>미흡</option>
            <option>해당없음</option>
          </select>
        </td>
        <td><input type="text" style="width:100%; border:none; outline:none; text-align:center;" placeholder="이상없음"></td>
      `;
      // default 값이 있으면 선택
      if(it.default) {
        const select = tr.querySelector('select');
        select.value = it.default;
      }
      tbody.appendChild(tr);
    });
  });
}

/* ===============================
   6) 검색 및 기타 초기화
   =============================== */
function initSearch() {
  const searchInput = document.getElementById("navSearch");
  if (!searchInput) return;

  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const val = e.target.value.trim();
      if (!val) return;
      
      // 화면에 생성된 버튼 중에서 텍스트가 일치하는 것 찾기
      const allBtns = Array.from(document.querySelectorAll(".nav-btn"));
      const target = allBtns.find(btn => btn.textContent.includes(val));
      
      if (target) {
        selectArea(target.dataset.area, target);
        alert(`'${target.textContent}' 구역으로 이동합니다.`);
        searchInput.value = ""; // 검색창 초기화
      } else {
        alert("검색 결과가 없습니다.");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildNav();
  initSearch();

  // 오늘 날짜 자동 입력
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  
  // 요일 구하기 함수
  function getFormattedDate(yyyy, mm, dd) {
    const date = new Date(yyyy, parseInt(mm) - 1, parseInt(dd));
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const dayName = daysOfWeek[date.getDay()];
    return `${yyyy}. ${mm}. ${dd}. (${dayName})`;
  }
  
  const dateInput = document.getElementById("date");
  if(dateInput) {
    dateInput.value = `${yyyy}-${mm}-${dd}`;
    
    // 초기 날짜 표시
    const pDate = document.getElementById("print-date");
    if(pDate) pDate.textContent = getFormattedDate(yyyy, mm, dd);
    
    // 점검일 변경 시 제목 업데이트
    dateInput.addEventListener("change", function() {
      const dateParts = this.value.split("-"); // YYYY-MM-DD
      if(dateParts.length === 3) {
        const newYyyy = dateParts[0];
        const newMm = dateParts[1];
        const newDd = dateParts[2];
        
        const title = document.getElementById("page-title");
        if(title) title.textContent = `${newYyyy}년 ${parseInt(newMm)}월 학교안전점검 체크리스트`;
        
        const pDate = document.getElementById("print-date");
        if(pDate) pDate.textContent = getFormattedDate(newYyyy, newMm, newDd);
      }
    });
  }
  
  const title = document.getElementById("page-title");
  if(title) title.textContent = `${yyyy}년 ${parseInt(mm)}월 학교안전점검 체크리스트`;

  // 점검자 이름 동기화
  const inspector = document.getElementById("inspector");
  if(inspector) {
    inspector.addEventListener("input", function() {
      document.getElementById("print-inspector-name").textContent = this.value;
    });
  }

  // 서명 팝업 버튼
  const signBtn = document.getElementById("signBtn");
  if(signBtn) {
    signBtn.addEventListener("click", () => {
       const w=430, h=260, l=(screen.width-430)/2, t=(screen.height-260)/3;
       window.open("signature.html", "sig", `width=${w},height=${h},left=${l},top=${t},resizable=no`);
    });
  }
});

// 서명 팝업에서 호출할 함수
window.receiveSignature = (dataURL) => {
  const img = document.getElementById("signature-img");
  if(img) {
    img.src = dataURL;
    img.style.display = "block";
  }
};
