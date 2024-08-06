import theQuestLocked from "../../assets/map/jpg/the quest_LOCKED.jpg"
import theQuestUnlocked from "../../assets/map/jpg/the quest_UNLOCKED.jpg"
import v1_Locked from "../../assets/map/jpg/verse 1_LOCKED.jpg"
import v1_Unlocked from "../../assets/map/jpg/verse 1_UNLOCKED.jpg"
import v2_Locked from "../../assets/map/jpg/verse 2_LOCKED.jpg"
import v2_Unlocked from "../../assets/map/jpg/verse 2_UNLOCKED.jpg"
import v3_Locked from "../../assets/map/jpg/verse 3_LOCKED.jpg"
import v3_Unlocked from "../../assets/map/jpg/verse 3_UNLOCKED.jpg"
import manifestLocked from "../../assets/map/jpg/manifest_LOCKED.jpg"
import manifestUnlocked from "../../assets/map/jpg/manifest_UNLOCKED.jpg"

const maps = [
  {
    locked: theQuestLocked,
    unlocked: theQuestUnlocked,
    title: "The Quest",
  },
  {
    locked: v1_Locked,
    unlocked: v1_Unlocked,
    title: "Verse 1",
  },
  {
    locked: v2_Locked,
    unlocked: v2_Unlocked,
    title: "Verse 2",
  },
  {
    locked: v3_Locked,
    unlocked: v3_Unlocked,
    title: "Verse 3",
  },
  {
    locked: manifestLocked,
    unlocked: manifestUnlocked,
    title: "Manifest",
  }
]

export { maps }