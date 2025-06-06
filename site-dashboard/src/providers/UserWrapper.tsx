import { useAuth } from "./AuthenticationContext"

const UserWrapper = ({ type, children }: { type: userType, children: React.ReactNode }) => {

    const { user } = useAuth()

    if (type !== user?.type) {
        return <div>You do not have permission to view this page.</div>
    }

    return (
        <>
            {children}
        </>
    )
}

export default UserWrapper
