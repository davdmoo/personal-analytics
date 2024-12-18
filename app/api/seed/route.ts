import database from "@/app/lib/utils/database"
import { UAParser } from "ua-parser-js"

export async function GET() {
  try {
    const db = database()
    const transaction = await db.transaction()
    const userAgents = [
      "Mozilla/5.0 (Linux; Android 13; SM-S901B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0",
      "Mozilla/5.0 (iPhone14,6; U; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19E241 Safari/602.1",
    ]

    userAgents.forEach(async (userAgent, index) => {
      const parsed = new UAParser(userAgent)
      const browser = parsed.getBrowser()
      const device = parsed.getDevice()
      const operatingSystem = parsed.getOS()

      const uuid = crypto.randomUUID()

      const id = index + 1
      await transaction.executeMultiple(`
        insert into browser (name, version) values ('${browser.name}', '${browser.version}');
        insert into operating_system (name, version) values ('${operatingSystem.name}', '${operatingSystem.version}');
        insert into device (type, vendor, model) values ('${device.type}', '${device.vendor}', '${device.model}');
        insert into visitor (public_id, user_agent, browser_id, device_id, os_id) values ('${uuid}', '${userAgent}', ${id}, ${id}, ${id});
      `)
    })

    await transaction.commit()
    return new Response(null, { status: 204 })
  } catch (err) {
    console.error(err)
    return Response.json({ message: "Error while seeding DB", error: err })
  }
}
