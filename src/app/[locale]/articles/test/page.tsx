import * as React from 'react';
import { getTranslations } from "next-intl/server";
import ArticleDetails from "@/components/article/Details";

export default async function Page() {
    const sections = [
        { id: "what-is-dex-cex", title: "什么是 CEX 和 DEX?", level: 2, content: (<p>中心化交易所（CEX）由平台撮合、托管与风控；去中心化交易所（DEX）通过链上协议撮合，资产自托管，权限更透明。</p>) },
        { id: "security", title: "安全性：平台风险 vs 自主掌控", level: 2, content: (<p>CEX 负责账户风控、冷热钱包管理与客服支持；DEX 强调私钥自托管，降低平台对手风险但对用户私钥保管提出更高要求。</p>) },
        { id: "liquidity", title: "流动性：做市深度 vs 池子深度", level: 2, content: (<p>CEX 往往具备更集中与深厚的订单簿；DEX 依赖 AMM 或聚合路由，长尾资产更丰富，但可能存在滑点与 MEV 风险。</p>) },
        { id: "fees", title: "费用：挂单/吃单费率 vs Gas 成本", level: 2, content: (<p>CEX 采用阶梯费率与返佣；DEX 交易需支付链上 Gas 与协议费，不同公链拥堵时成本差异较大。</p>) },
        { id: "ux", title: "体验：一体化服务 vs 去中心化组合", level: 2, content: (<p>CEX 提供法币出入金、客服、衍生品与风控工具；DEX 组合可玩性强，需更高的链上操作熟练度与安全意识。</p>) },
        { id: "summary", title: "小结：如何选择更适合你的交易所", level: 2, content: (<ul className="list-disc pl-5 space-y-1"><li>重体验与合规支持：更偏向 CEX</li><li>重自托管与组合玩法：更偏向 DEX</li><li>也可采用“资产分层”与“双轨备份”策略</li></ul>) },
        { id: "summary1", title: "小结：如何选择更适合你的交易所", level: 2, content: (<ul className="list-disc pl-5 space-y-1"><li>重体验与合规支持：更偏向 CEX</li><li>重自托管与组合玩法：更偏向 DEX</li><li>也可采用“资产分层”与“双轨备份”策略</li></ul>) },
        { id: "summary2", title: "小结：如何选择更适合你的交易所", level: 2, content: (<ul className="list-disc pl-5 space-y-1"><li>重体验与合规支持：更偏向 CEX</li><li>重自托管与组合玩法：更偏向 DEX</li><li>也可采用“资产分层”与“双轨备份”策略</li></ul>) },
        { id: "summary3", title: "小结：如何选择更适合你的交易所", level: 2, content: (<ul className="list-disc pl-5 space-y-1"><li>重体验与合规支持：更偏向 CEX</li><li>重自托管与组合玩法：更偏向 DEX</li><li>也可采用“资产分层”与“双轨备份”策略</li></ul>) },
        { id: "summary4", title: "小结：如何选择更适合你的交易所", level: 2, content: (<ul className="list-disc pl-5 space-y-1"><li>重体验与合规支持：更偏向 CEX</li><li>重自托管与组合玩法：更偏向 DEX</li><li>也可采用“资产分层”与“双轨备份”策略</li></ul>) },
    ]

    const articlesAry = [
        { imageUrl: "/images/academy/learning-article1.png", title: "基于税收尺度的定量研究：地方保护的“衡量”", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/academy/learning-article2.png", title: "宏观经济深度报告：大财政时代冲击联储独立性...", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/academy/learning-article3.png", title: "人民币升值：短期催化与长期重估", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/academy/learning-article4.png", title: "资产配置日报：风云突变", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/academy/learning-article5.png", title: "债市分析框架之资金面", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/academy/learning-article6.png", title: "盛宴未散 见招拆招", disc: "宏观", time: "2025/9/3" },
    ];

    return (
        <div>
            <ArticleDetails
                sections={sections}
                breadcrumb={{ firstName: "新手学院学习中心", secondName: "DEX 与 CEX", path: "/" }}
                title={"DEX 与 CEX：哪种加密货币交易所更适合你？"}
                time={"2025年9月13日"}
                tags={[{ text: "外汇市场" }, { text: "交易入门" }]}
                articlesAry={articlesAry}
            />
        </div>
    )
}