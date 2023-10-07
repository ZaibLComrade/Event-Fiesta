import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { 
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import auth from "../config/firebase.config"

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
	const [user, setUser] = useState(null); // To store logged in user
	
	useEffect(() => {
		// Observes user logged in state and returns callback function to unsubscribe on component unmount
		const unsubscribe = onAuthStateChanged(auth, loggedInUser => {
			setUser(loggedInUser);
		})
		
		return () => {
			unsubscribe();
		}
	}, []);
	
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	}
	const signInUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	}
	const signOutUser = () => {
		return signOut(auth);
	}
	const googleSignInUser = () => {
		const provider = new GoogleAuthProvider;
		return signInWithPopup(auth, provider);
	}
	
	// Context data to be passed upon children components
	const authInfo = {
		user,
		createUser,
		signInUser,
		signOutUser,
		googleSignInUser,
		updateProfile,
	};
	
	return <AuthContext.Provider value={ authInfo }>
		{ children }
	</AuthContext.Provider>
}

// Validate props
AuthProvider.propTypes = {
	children: PropTypes.node,
}