function FilterSection() {
  return (
    <div className="sort-item">
      <div className="btn-group flex items-center justify-start gap-2 max-w-full min-w-full overflow-x-auto">
        <button className="btn btn-primary">
          <span>Semua Produk</span>
          <span className="bg-white rounded-lg text-[#DA2424] px-1 py-1">
            45
          </span>
        </button>
        <button className="btn btn-muted">Kategori</button>
      </div>
      <div className="full">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Cari Produk" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <path
              d="M28.0358 26.4479L20.4838 18.8959C22.2986 16.7172 23.2035 13.9228 23.0104 11.0938C22.8173 8.2649 21.541 5.61932 19.447 3.70745C17.353 1.79557 14.6025 0.764606 11.7677 0.829018C8.93293 0.89343 6.23211 2.04826 4.2271 4.05327C2.22209 6.05828 1.06726 8.75911 1.00285 11.5939C0.938435 14.4287 1.9694 17.1792 3.88128 19.2732C5.79315 21.3672 8.43873 22.6435 11.2677 22.8366C14.0966 23.0297 16.8911 22.1247 19.0698 20.3099L26.6218 27.8619L28.0358 26.4479ZM3.03576 11.8619C3.03576 10.0819 3.5636 8.34184 4.55253 6.8618C5.54147 5.38176 6.94707 4.22821 8.59161 3.54702C10.2361 2.86583 12.0457 2.6876 13.7916 3.03486C15.5374 3.38213 17.141 4.2393 18.3997 5.49797C19.6584 6.75664 20.5156 8.36029 20.8628 10.1061C21.2101 11.8519 21.0319 13.6615 20.3507 15.3061C19.6695 16.9506 18.5159 18.3562 17.0359 19.3452C15.5559 20.3341 13.8158 20.8619 12.0358 20.8619C9.64962 20.8593 7.36198 19.9102 5.67472 18.223C3.98747 16.5357 3.03841 14.2481 3.03576 11.8619Z"
              fill="#979797"
              stroke="#979797"
            ></path>
          </svg>
        </label>
      </div>
      <div className="p-[10px] rounded-[5px] w-full text-sm font-normal flex items-center mt-[8px] bg-[#FFDADA] border border-[#DA2424] text-black">
        <span>Note : Untuk pesanan bungkus wajib pesan dikasir</span>
      </div>
    </div>
  );
}


export default FilterSection