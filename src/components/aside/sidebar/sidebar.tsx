function Sidebar() {
    return (
        <div className="sidebar">
            <a href="#">
                <span className="material-icons-sharp">terminal</span>
                <h3>コード</h3>
            </a>
            <a href="#" className="active">
                <span className="material-icons-sharp">school</span>
                <h3>コース</h3>
            </a>
            <a href="#">
                <span className="material-icons-sharp">settings</span>
                <h3>設定</h3>
            </a>
            <a href="#">
                <span className="material-icons-sharp">account_circle</span>
                <h3>アカウント</h3>
            </a>
            <a href="#">
                <span className="material-icons-sharp">view_list</span>
                <h3>問題一覧</h3>
            </a>
        </div>
    );
  }
  
export default Sidebar;