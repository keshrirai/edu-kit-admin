<div className=" rounded-md shadow-sm relative">
    <label className="block w-full text-gray-600 mb-1 pl-4">Old Password: </label>
    <input className={(!this.state.errorspasswordupdate["OldPassword"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100', 'block w-full px-4 py-3 rounded-full transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 flex justify-center placeholder-gray-600 focus:outline-none focus:text-gray-900 focus:border-gray-800 focus:bg-gray-100 text-gray-600')}
        name="OldPassword"
        value={this.state.fieldspasswordupdate["OldPassword"] ? this.state.fieldspasswordupdate["OldPassword"] : ''}
        onChange={this.inputChange} placeholder="Old Password" type="text" />
    {this.state.errorspasswordupdate["OldPassword"] ?
        <div className="invalid-feedback  text-yellow-600">
            {this.state.errorspasswordupdate["OldPassword"]}
        </div>
        : null}
</div>
// {/* <div className="relative">
//                         <label className="block w-full text-gray-600 mb-1 pl-4">Name</label>
//                         <input className={(!this.state.errorspasswordupdate["name"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100', 'block w-full px-4 py-3 rounded-full transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none focus:text-gray-900 focus:border-gray-800 focus:bg-gray-100 text-gray-600')} name="name"
//                           value={this.state.fieldspasswordupdate["name"] ? this.state.fieldspasswordupdate["name"] : ''}
//                           onChange={this.inputChangeProfile} placeholder="Name" type="text" />

//                         {this.state.errorspasswordupdate["name"] ?
//                           <div className="invalid-feedback  text-yellow-600">
//                             {this.state.errorspasswordupdate["name"]}
//                           </div>
//                           : null}
//                       </div> */}