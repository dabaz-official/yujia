import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function faqs () {
  return (
    <div className="antalised">
      <Navbar />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 scroll-m-20 sm:mt-24 sm:scroll-m-24 xl:mt-12 xl:scroll-m-32">
        <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-y-16 gap-x-14 lg:max-w-none lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-base font-semibold leading-7 text-blue-500">
              了解予家
            </h2>
            <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-4xl xl:leading-[3.5rem]">深入了解予家平台</p>
          </div>
          <div className="-mb-4 space-y-12 lg:col-span-8 xl:col-span-7 xl:col-start-6">
            <section>
              <h3 className="text-sm font-semibold leading-7 text-slate-400">通用</h3>
              <dl className="mt-2 divide-y divide-slate-100">
                <div className="group py-4">
                  <div className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-blue-600 group-open:text-blue-600">
                    予家是什么平台？
                  </div>
                  <div className="pt-6 pb-6">
                    <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
                      予家是一个<span className="font-bold">老共青租房平台</span>，旨在为刚毕业的大学生们和留守老年人提供一个低价高质的租房平台。
                    </div>
                  </div>
                  <div className="border-t border-slate-200/70 py-2">
                  </div>
                  <div className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-blue-600 group-open:text-blue-600">
                    予家能提供什么服务？
                  </div>
                  <div className="pt-6 pb-6">
                    <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
                      予家可以为用户提供<span className="font-bold">租房、出租、匹配室友、子账号</span>等服务。
                    </div>
                  </div>
                  <div className="border-t border-slate-200/70 py-2">
                  </div>
                  <div className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-blue-600 group-open:text-blue-600">
                    什么是子账号？
                  </div>
                  <div className="pt-6 pb-6">
                    <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
                      子账号是为老年人推出的服务，子女可以登录子账号为其租房、联系房东。
                    </div>
                  </div>
                </div>
              </dl>
            </section>
            <section className="pb-6 xl:pb-12">
              <h3 className="text-sm font-semibold leading-7 text-slate-400">特殊</h3>
              <dl className="mt-2 divide-y divide-slate-100">
                <div className="group py-4">
                  <div className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-blue-600 group-open:text-blue-600">
                    予家平台的优势是什么？
                  </div>
                  <div className="pt-6 pb-6">
                    <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
                      予家添加了<span className="font-bold">匹配室友</span>功能，这是市场中少见的一项功能，便于用户挑选室友。子账号功能也有助于老年人租房。
                    </div>
                  </div>
                  <div className="border-t border-slate-200/70 py-2">
                  </div>
                  <div className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-blue-600 group-open:text-blue-600">
                    未来可能添加的功能有哪些？
                  </div>
                  <div className="pt-6 pb-6">
                    <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
                      未来，予家可能会加入<span className="font-bold">关爱模式</span>，构建字体更大，颜色对比更鲜明的页面，便于老年人查看。
                    </div>
                  </div>
                </div>
              </dl>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    
  )
}