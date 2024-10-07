
interface IProps {
  onClose: () => void;
}

const ModalLogin = ({onClose}: IProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <h2 className="text-lg font-bold mb-4 text-center">Đăng Nhập</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="username">
              Tên người dùng
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 rounded-lg w-full p-2"
              placeholder="Nhập tên người dùng"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-lg w-full p-2"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-teal-500 text-white rounded-lg px-4 py-2"
              onClick={onClose}
            >
              Đăng Nhập
            </button>
            <button
              type="button"
              className="ml-2 bg-gray-300 text-gray-700 rounded-lg px-4 py-2"
              onClick={onClose}
            >
              Đóng
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalLogin