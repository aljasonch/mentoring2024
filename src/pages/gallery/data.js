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

export default {
    main: {},
    tutorial: {
        back: "main",
        screenname: "tutorial",
        next: "stage1",
        title: "Tutorial Stage",
        widecover:
            DSC08819,
        images: [
            DSC08819,
            DSC08820,
            DSC08821,
            DSC08822,
            DSC08823,
        ],
    },
    stage1: {
        back: "tutorial",
        screenname: "stage1",
        next: "stage2",
        title: "Stage 1",
        widecover:
            DSC08824,
        images: [
            DSC08824,
            DSC08825,
            DSC08826,
            DSC08827,
            DSC08828,
        ],
    },
    stage2: {
        back: "stage1",
        screenname: "stage2",
        next: "stage3",
        title: "Stage 2",
        widecover:
            DSC08829,
        images: [
            DSC08829,
            DSC08830,
            DSC08831,
            DSC08832,
            DSC08833,
        ],
    },
    stage3: {
        back: "stage2",
        screenname: "stage3",
        next: "main",
        title: "Stage 3",
        widecover:
            DSC08835,
        images: [
            DSC08835,
            DSC08830,
            DSC08831,
            DSC08832,
            DSC08833,
        ],
    },
};