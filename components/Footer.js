import Image from "next/image";
import Link from "next/link";

export default function Footer () {
  return (
    <footer className="bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ul className="flex-none grid grid-cols-2 sm:flex text-slate-300 text-sm sm:space-x-4 lg:space-x-8 py-6">
          <li>
            <Link href="/faqs">
              <a>
                了解予家
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                隐私声明
              </a>
            </Link>
          </li>
          <li>
            <Link href="http://dabazofficial.com/" target="_blank" rel="noopener noreferrer">
              <a>
                友情链接
              </a>
            </Link>
          </li>
        </ul>
        <div className="border-t border-slate-600/70 py-2">
        </div>
        <div className="pb-4 text-slate-400 text-xs">
          <p>予家（北京）科技有限公司 | 网络经营许可证 <Link href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noopener noreferrer"><a>京ICP备2021030502号</a></Link> |  Copyright©2022 予家版权所有 | 营业执照</p>
          <p>违法和不良信息举报电话：010-693550XX 违法和不良信息举报邮箱：<Link href="mailto:dabaz.official@skiff.com" target="_blank" rel="noopener noreferrer"><a>dabaz.official@skiff.com</a></Link></p>
          <p>涉未成年人举报电话：010-693550XX 涉未成年人举报邮箱：<Link href="mailto:dabaz.official@skiff.com" target="_blank" rel="noopener noreferrer"><a>dabaz.official@skiff.com</a></Link></p>
          <div className="flex space-x-2">
            <Image src="/img/gongan.png" alt="公安" width="15" height="15" className="h-8 w-8" />
            <p>京公网安备 110XXXXXXXXXXX号 <Link href="https://www.12377.cn/" target="_blank" rel="noopener noreferrer"><a>网上有害信息举报专区</a></Link></p>
          </div>
        </div>
      </div>
    </footer>
  )
}