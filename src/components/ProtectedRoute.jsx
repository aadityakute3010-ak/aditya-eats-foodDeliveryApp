import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children, adminOnly = false }) {
    const { isLoggedIn, role } = useSelector((state) => state.auth);
    const location = useLocation();

    if (!isLoggedIn) {
        // Save where they were trying to go, redirect after login
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (adminOnly && role !== 'admin') {
        return <Navigate to="/" replace />;
    }

    return children;
}