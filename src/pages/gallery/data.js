import DSC08819 from "../../assets/gallery/DSC08819.avif";
import DSC08820 from "../../assets/gallery/DSC08820.avif";
import DSC08821 from "../../assets/gallery/DSC08821.avif";
import DSC08822 from "../../assets/gallery/DSC08822.avif";
import DSC08823 from "../../assets/gallery/DSC08823.avif";
import DSC08824 from "../../assets/gallery/DSC08824.avif";
import DSC08825 from "../../assets/gallery/DSC08825.avif";
import DSC08826 from "../../assets/gallery/DSC08826.avif";
import DSC08827 from "../../assets/gallery/DSC08827.avif";
import DSC08828 from "../../assets/gallery/DSC08828.avif";
import DSC08829 from "../../assets/gallery/DSC08829.avif";
import DSC08830 from "../../assets/gallery/DSC08830.avif";
import DSC08831 from "../../assets/gallery/DSC08831.avif";
import DSC08832 from "../../assets/gallery/DSC08832.avif";
import DSC08833 from "../../assets/gallery/DSC08833.avif";
import DSC08835 from "../../assets/gallery/DSC08835.avif";
import theQuestLocked from "../../assets/map/jpg/the quest_LOCKED.jpg"
import theQuestUnlocked from "../../assets/map/jpg/the quest_UNLOCKED.jpg"
import verse1Locked from "../../assets/map/jpg/verse 1_LOCKED.jpg"
import verse1Unlocked from "../../assets/map/jpg/verse 1_UNLOCKED.jpg"
import verse2Locked from "../../assets/map/jpg/verse 2_LOCKED.jpg"
import verse2Unlocked from "../../assets/map/jpg/verse 2_UNLOCKED.jpg"
import verse3Locked from "../../assets/map/jpg/verse 3_LOCKED.jpg"
import verse3Unlocked from "../../assets/map/jpg/verse 3_UNLOCKED.jpg"
import manifestLocked from "../../assets/map/jpg/manifest_LOCKED.jpg"
import manifestUnlocked from "../../assets/map/jpg/manifest_UNLOCKED.jpg"

export default {
  main: {},
  tutorial: {
    back: "main",
    screenname: "tutorial",
    next: "stage1",
    title: "The Quest",
    widecoverLocked: theQuestLocked,
    widecoverUnlocked: theQuestUnlocked,
    date: "2024-09-07",
    images: [DSC08819, DSC08820, DSC08821, DSC08822, DSC08823],
  },
  stage1: {
    back: "tutorial",
    screenname: "stage1",
    next: "stage2",
    title: "Verse 1",
    widecoverLocked: verse1Locked,
    widecoverUnlocked: verse1Unlocked,
    date: "2024-09-14",
    images: [DSC08824, DSC08825, DSC08826, DSC08827, DSC08828],
  },
  stage2: {
    back: "stage1",
    screenname: "stage2",
    next: "stage3",
    title: "Verse 2",
    widecoverLocked: verse2Locked,
    widecoverUnlocked: verse2Unlocked,
    date: "2024-09-21",
    images: [DSC08829, DSC08830, DSC08831, DSC08832, DSC08833],
  },
  stage3: {
    back: "stage2",
    screenname: "stage3",
    next: "manifest",
    title: "Verse 3",
    widecoverLocked: verse3Locked,
    widecoverUnlocked: verse3Unlocked,
    date: "2024-09-28",
    images: [DSC08835, DSC08830, DSC08831, DSC08832, DSC08833],
  },
  manifest: {
    back: "stage3",
    screenname: "manifest",
    next: "main",
    title: "Manifest",
    widecoverLocked: manifestLocked,
    widecoverUnlocked: manifestUnlocked,
    date: "2024-09-28",
    images: [DSC08835, DSC08830, DSC08831, DSC08832, DSC08833],
  }
};
