import { getAuth, oFirestore } from "./firebase-config";
import { collection, getDocs, query, where, doc, getDoc, addDoc, Timestamp, updateDoc, deleteDoc} from "firebase/firestore";


async function fnGetWorkGroups(sUserEmail) {
    if(sUserEmail != "N/A") {
        const sUserHandle = "@" + sUserEmail.split("@")[1];
        const oInstitutionRefs = query(collection(oFirestore, "Institutions"), where("institution_handle", '==', sUserHandle));
        const oInstitutionDocs = await getDocs(oInstitutionRefs);
        if (oInstitutionDocs.docs.length > 0) {
            return oInstitutionDocs.docs[0].id;
        } else {
            return "Error No Documents";
        }
    } else {
        return "Error Invalid Login";
    }
}