import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import theQuestLocked from "../../assets/map/the quest_LOCKED.jpg";
import theQuestUnlocked from "../../assets/map/the quest_UNLOCKED.jpg";
import verse1Locked from "../../assets/map/verse 1_LOCKED.jpg";
import verse1Unlocked from "../../assets/map/verse 1_UNLOCKED.jpg";
import verse2Locked from "../../assets/map/verse 2_LOCKED.jpg";
import verse2Unlocked from "../../assets/map/verse 2_UNLOCKED.jpg";
import verse3Locked from "../../assets/map/verse 3_LOCKED.jpg";
import verse3Unlocked from "../../assets/map/verse 3_UNLOCKED.jpg";
import manifestLocked from "../../assets/map/manifest_LOCKED.jpg";
import manifestUnlocked from "../../assets/map/manifest_UNLOCKED.jpg";

const firebaseConfig = {
  apiKey: "AIzaSyDnR3NWo0k8Dnx8pOO8XNejdhM9SIiGRJE",
  authDomain: "mentoring-2024.firebaseapp.com",
  projectId: "mentoring-2024",
  storageBucket: "mentoring-2024.appspot.com",
  messagingSenderId: "335274012016",
  appId: "1:335274012016:web:f8d270cb72ffe5b6c3f3b5",
  measurementId: "G-E90KEFRZCR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchImageUrls = async () => {
  const stages = ['tutorial', 'stage1', 'stage2', 'stage3', 'manifest'];

  const newImageUrls = {};

  for (const stage of stages) {
    const docRef = doc(db, 'stageImages', stage);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      newImageUrls[stage] = docSnap.data().images || [];
    } else {
      newImageUrls[stage] = [];
    }
  }

  return newImageUrls;
};

export const getData = async () => {
  try {
    const imageUrls = await fetchImageUrls();

    return {
      main: {},
      tutorial: {
        back: "main",
        screenname: "tutorial",
        next: "stage1",
        title: "The Quest",
        widecoverLocked: theQuestLocked,
        widecoverUnlocked: theQuestUnlocked,
        date: "2024-09-07",
        images: imageUrls.tutorial,
        link:  "https://bit.ly/thequestmentoring2024",
      },
      stage1: {
        back: "tutorial",
        screenname: "stage1",
        next: "stage2",
        title: "Verse 1",
        widecoverLocked: verse1Locked,
        widecoverUnlocked: verse1Unlocked,
        date: "2024-09-14",
        images: imageUrls.stage1,
        link: "https://bit.ly/1stversementoring2024",
      },
      stage2: {
        back: "stage1",
        screenname: "stage2",
        next: "stage3",
        title: "Verse 2",
        widecoverLocked: verse2Locked,
        widecoverUnlocked: verse2Unlocked,
        date: "2024-09-21",
        images: imageUrls.stage2,
        link: "https://bit.ly/2ndversementoring2024",
      },
      stage3: {
        back: "stage2",
        screenname: "stage3",
        next: "manifest",
        title: "Verse 3",
        widecoverLocked: verse3Locked,
        widecoverUnlocked: verse3Unlocked,
        date: "2024-09-28",
        images: imageUrls.stage3,
        link: "https://bit.ly/3rdversementoring2024"
      },
      manifest: {
        back: "stage3",
        screenname: "manifest",
        next: "main",
        title: "Manifest",
        widecoverLocked: manifestLocked,
        widecoverUnlocked: manifestUnlocked,
        date: "2024-09-28",
        images: imageUrls.manifest,
      }
    };
  } catch (error) {
    console.error('Failed to get data:', error);
    return {}; 
  }
};
