import axios from "axios";

const API_BASE_URL = "http://localhost:8090/api";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: { "Content-Type": "application/json" }
});

// Attach token automatically to all requests
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;


// import axios from "axios";
// const API_BASE_URL = "http://localhost:8090/api";

// // Create an axios instance
// const api = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });


// // Add a request interceptor to include the token in headers
// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );


// // api methods
// export const apiService = {

//     saveAuthData: (token, roles) => {
//         localStorage.setItem('token', token);
//         localStorage.setItem('roles', JSON.stringify(roles));
//     },

//     logout: () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('roles');
//     },

//     hasRole(role) {
//         const roles = localStorage.getItem('roles');
//         return roles ? JSON.parse(roles).includes(role) : false;
//     },

//     isAuthenticated: () => {
//         return localStorage.getItem('token') !== null;
//     },

//     // is Admin
//     isAdmin() {
//         return this.hasRole('ADMIN');
//     },

//     // is Customer
//     isCustomer() {
//         return this.hasRole('CUSTOMER');
//     },

//     // is Auditor
//     isAuditor() {
//         return this.hasRole('AUDITOR');
//     },

//     login: (body) => {
//         return api.post('/auth/login', body);
//     },

//     register: (body) => {
//         return api.post('/auth/register', body);
//     },

//     forgetPassword: (body) => {
//         return api.post('/auth/forgot-password', body);
//     },

//     resetPassword: (body) => {
//         return api.post('/auth/reset-password', body);
//     },

//     getProfile: () => {
//         return api.get('/users/me');
//     },

//     // update password
//     updatePassword: (oldPassword, newPassword) => {
//         return api.put('/users/update-password', { oldPassword, newPassword });
//     },

//     uploadProfilePicture: (file) => {
//         const formData = new FormData();
//         formData.append('file', file);

//         return api.post('/users/profile-picture', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//     },


//     /* ACCOUNT */
//     getMyAccounts: () => {
//         return api.get('/accounts/me');
//     },


//     /* TRANSACTION */
//     // make a transaction
//     makeTransfer: (transferData) => {
//         return api.post('/transactions', transferData);
//     },

//     // get transactions for an account
//     getTransactions: (accountNumber, page = 0, size = 10) => {
//         return api.get(`/transactions/${accountNumber}?page=${page}&size=${size}`);
//     },



//     /* AUDITOR */
//     // get system totals
//     getSystemTotals: () => {
//         return api.get('/audit/totals');
//     },

//     // find user by email
//     findUserByEmail: (email) => {
//         return api.get(`/audit/users?email=${email}`);
//     },

//     // find account by account number
//     findAccountByAccountNumber: (accountNumber) => {
//         return api.get(`/audit/accounts?accountNumber=${accountNumber}`);
//     },

//     // find transactions by account number
//     findTransactionsByAccountNumber: (accountNumber) => {
//         return api.get(`/audit/transactions/by-account?accountNumber=${accountNumber}`);
//     },

//     // find transaction by id
//     findTransactionById: (transactionId) => {
//         return api.get(`/audit/transactions/by-id?transactionId=${transactionId}`)
//     }

// }

// export default api;



// // JSON.parse(roles)
// // Converts the string from localStorage back into an array.
// // Example:
// // JSON.parse('["ADMIN","USER"]') → ['ADMIN', 'USER']

// // ✅ .includes(role)
// // Checks if the array contains the given role.
// // Example:
// // ['ADMIN', 'USER'].includes('ADMIN') → true
// // ['ADMIN', 'USER'].includes('GUEST') → false
