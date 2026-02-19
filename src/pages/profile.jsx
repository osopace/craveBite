import { useState } from "react";
import Navbar from "../components/unsignedNav";

export default function ProfilePage() {
  const [changePassword, setChangePassword] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("scholar@gmail.com");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordToggle = () => setChangePassword(!changePassword);

  const handleProfileUpdate = () => {
    console.log("Updating profile:", { name, email });
  };

  const handlePasswordUpdate = () => {
    if (newPassword === confirmPassword) {
      console.log("Password updated:", { oldPassword, newPassword });
      setChangePassword(false);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      alert("Passwords do not match!");
    }
  };

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
        {/* PROFILE CARD */}
        <div className="w-[80%] max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
          {/* PROFILE HEADER */}
          <div className="bg-orange-50 px-8 py-6 flex items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-orange-400">
              <img
                src="https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FHispanic%2F3"
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
              <p className="text-gray-600">{email}</p>
            </div>
          </div>

          {/* PROFILE INFO FORM */}
          {!changePassword ? (
            <div className="px-8 py-6 flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Profile Information
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-medium">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="scholar@gmail.com"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleProfileUpdate}
                  className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition"
                >
                  Update Profile
                </button>
              </div>

              {/* SECURITY */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Security
                </h3>
                <button
                  onClick={handlePasswordToggle}
                  className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition"
                >
                  Change Password
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="px-8 py-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Change Password
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-medium">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="Enter current password"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-medium">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-medium">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handlePasswordUpdate}
                    className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition"
                  >
                    Update Password
                  </button>
                  <button
                    onClick={handlePasswordToggle}
                    className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
